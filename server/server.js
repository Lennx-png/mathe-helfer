const express = require('express');
const cors = require('cors');
const path = require('path');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const db = require('./db');
const { generateToken, requireAuth } = require('./auth');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '..')));

function asyncHandler(fn) {
  return (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
}

app.post('/api/auth/register', asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Benutzername und Passwort erforderlich' });
  }
  if (password.length < 4) {
    return res.status(400).json({ error: 'Passwort muss mindestens 4 Zeichen lang sein' });
  }

  const existing = await db.findUser(username);
  if (existing) {
    return res.status(409).json({ error: 'Benutzer existiert bereits' });
  }

  const hash = bcrypt.hashSync(password, 10);
  await db.addUser(username, hash);
  res.json({ ok: true, username });
}));

app.post('/api/auth/login', asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Benutzername und Passwort erforderlich' });
  }

  const user = await db.findUser(username);
  if (!user) {
    return res.status(401).json({ error: 'Falscher Benutzername oder Passwort' });
  }

  const valid = bcrypt.compareSync(password, user.password_hash);
  if (!valid) {
    return res.status(401).json({ error: 'Falscher Benutzername oder Passwort' });
  }

  const token = generateToken(user.id, user.username);
  res.json({ token, username: user.username });
}));

app.get('/api/user/progress', requireAuth, asyncHandler(async (req, res) => {
  const progress = await db.getProgress(req.user.userId);
  res.json({ data: progress.data || null });
}));

app.put('/api/user/progress', requireAuth, asyncHandler(async (req, res) => {
  const { data } = req.body;
  if (data === undefined || data === null) {
    return res.status(400).json({ error: 'Keine Daten übermittelt' });
  }
  await db.setProgress(req.user.userId, data);
  res.json({ ok: true });
}));

app.get('/api/admin/users', requireAuth, asyncHandler(async (req, res) => {
  const users = await db.getUsers();
  res.json({
    count: users.length,
    users: users.map(u => ({ id: u.id, username: u.username, created_at: u.created_at }))
  });
}));

app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Interner Serverfehler' });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
  });
}

module.exports = app;

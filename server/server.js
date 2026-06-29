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

const ADMIN_SECRET = process.env.ADMIN_SECRET;

app.post('/api/auth/register', (req, res) => {
  const { username, password, adminSecret } = req.body;
  if (!ADMIN_SECRET) {
    return res.status(500).json({ error: 'ADMIN_SECRET nicht auf dem Server konfiguriert' });
  }
  if (adminSecret !== ADMIN_SECRET) {
    return res.status(403).json({ error: 'Ungültiger Admin-Schlüssel' });
  }
  if (!username || !password) {
    return res.status(400).json({ error: 'Benutzername und Passwort erforderlich' });
  }
  if (password.length < 4) {
    return res.status(400).json({ error: 'Passwort muss mindestens 4 Zeichen lang sein' });
  }
  if (db.findUser(username)) {
    return res.status(409).json({ error: 'Benutzer existiert bereits' });
  }
  const hash = bcrypt.hashSync(password, 10);
  db.addUser(username, hash);
  res.json({ ok: true, username });
});

app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Benutzername und Passwort erforderlich' });
  }

  const user = db.findUser(username);
  if (!user) {
    return res.status(401).json({ error: 'Falscher Benutzername oder Passwort' });
  }

  const valid = bcrypt.compareSync(password, user.password_hash);
  if (!valid) {
    return res.status(401).json({ error: 'Falscher Benutzername oder Passwort' });
  }

  const token = generateToken(user.id, user.username);
  res.json({ token, username: user.username });
});

app.get('/api/user/progress', requireAuth, (req, res) => {
  const data = db.getProgress(req.user.userId);
  res.json({ data: data || null });
});

app.put('/api/user/progress', requireAuth, (req, res) => {
  const { data } = req.body;
  if (data === undefined || data === null) {
    return res.status(400).json({ error: 'Keine Daten übermittelt' });
  }
  db.setProgress(req.user.userId, data);
  res.json({ ok: true });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
  });
}

module.exports = app;

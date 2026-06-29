const fs = require('fs');
const path = require('path');

const DB_PATH = path.join(__dirname, '..', 'data', 'app.json');

function readDb() {
  try {
    if (fs.existsSync(DB_PATH)) {
      const raw = fs.readFileSync(DB_PATH, 'utf-8');
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('Fehler beim Lesen der Datenbank:', e.message);
  }
  return { users: [], progress: {} };
}

function writeDb(data) {
  try {
    const dir = path.dirname(DB_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
  } catch (e) {
    console.error('Fehler beim Schreiben der Datenbank:', e.message);
  }
}

function getUsers() {
  return readDb().users;
}

function findUser(username) {
  const db = readDb();
  return db.users.find(u => u.username === username) || null;
}

function addUser(username, passwordHash) {
  const db = readDb();
  db.users.push({
    id: db.users.length + 1,
    username,
    password_hash: passwordHash,
    created_at: new Date().toISOString()
  });
  writeDb(db);
}

function getProgress(userId) {
  const db = readDb();
  return db.progress[String(userId)] || null;
}

function setProgress(userId, data) {
  const db = readDb();
  db.progress[String(userId)] = data;
  writeDb(db);
}

module.exports = { getUsers, findUser, addUser, getProgress, setProgress };

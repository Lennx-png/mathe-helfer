const bcrypt = require('bcryptjs');
const db = require('./db');

const username = process.argv[2];
const password = process.argv[3];

if (!username || !password) {
  console.error('Usage: npm run create-user -- <username> <password>');
  process.exit(1);
}

if (password.length < 4) {
  console.error('Passwort muss mindestens 4 Zeichen lang sein');
  process.exit(1);
}

const existing = db.findUser(username);
if (existing) {
  console.error(`Benutzer "${username}" existiert bereits`);
  process.exit(1);
}

const hash = bcrypt.hashSync(password, 10);
db.addUser(username, hash);

console.log(`Benutzer "${username}" erfolgreich erstellt`);

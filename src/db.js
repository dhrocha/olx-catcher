const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/banco.db', (err) => {
  if (err) {
    console.log('Error connecting to database:', err)
  } else {
    console.log('Connected to database')
  }
})

module.exports = db

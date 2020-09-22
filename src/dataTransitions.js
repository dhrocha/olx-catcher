const db = require('./db')

const saveData = async (query, results) => {
  const dateTime = new Date()
  await db.run(
    'INSERT INTO search (queryString, dateTime, results) VALUES (?,?,?)',
    [query, dateTime, JSON.stringify(results)],
    (err) => {
      if (err) {
        console.log('Error inserting data: ' + err)
      }
    }
  )
}

const updateData = async (id, results) => {
  const dateTime = new Date()
  await db.run(
    'UPDATE search SET datetime = ?, results = ? WHERE id = ?',
    [dateTime, JSON.stringify(results), id],
    (err) => {
      if (err) {
        console.log('Error updating data: ' + err)
      }
    }
  )
}

const loadData = (queryString) => {
  return new Promise((resolve, reject) => {
    db.get(
      'SELECT * FROM search WHERE queryString = ?',
      [queryString],
      (err, row) => {
        if (err) {
          reject('Error loading data: ' + err)
        } else {
          resolve(row)
        }
      }
    )
  })
}

module.exports = {
  saveData,
  loadData,
  updateData,
}

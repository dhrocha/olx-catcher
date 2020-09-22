const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const returnData = require('./returnData')
const { saveData, loadData, updateData } = require('./dataTransitions')

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send(
    'Carbel-Group OLX api: To test, send a get requisition to /getOlxData'
  )
})

app.get('/getOlxData', async (req, res) => {
  const { query, hoursPersistance } = req.body
  const dateTime = new Date()
  const dataSaved = await loadData(query)

  setTimeout(async () => {
    let result
    if (dataSaved) {
      const databaseDate = new Date(Number(dataSaved.datetime))
      databaseDate.setHours(databaseDate.getHours() + hoursPersistance)

      if (dataSaved.length == 0) {
        result = await returnData(query)
        await saveData(query, result)
        console.log('Data saved')
      } else {
        if (Number(dateTime) > Number(databaseDate)) {
          result = await returnData(query)
          await updateData(dataSaved.id, result)
          console.log('Data updated')
        } else {
          result = JSON.parse(dataSaved.results)
          console.log('Returned persistent data')
        }
      }
    } else {
      result = await returnData(query)
      await saveData(query, result)
      console.log('Data saved')
    }
    res.send(result)
  }, 3000)
})

app.listen(3000, (err) => {
  console.log('listening')
})

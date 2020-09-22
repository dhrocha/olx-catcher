const Axios = require('axios')

async function fetchData(url) {
  console.log('Crawling...')
  let resp = await Axios.get(url)

  if (resp.status != 200) {
    console.log('Error occurring while fatching data')
  }

  return resp
}

module.exports = fetchData

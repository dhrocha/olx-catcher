const fetchData = require('./fetchData')
const cheerio = require('cheerio')

const returnData = async (query) => {
  const res = await fetchData(
    'https://mg.olx.com.br/autos-e-pecas/carros-vans-e-utilitarios/?sf=1&q=' +
      query
  )

  let objectData = []
  const html = res.data
  const $ = cheerio.load(html)

  let olxTable = $('#ad-list')

  olxTable.each((i, ul) => {
    const olxLi = $(ul).find('li > a > div')

    let dataObj = {}
    olxLi.each((i, div) => {
      const img = $(div).find('.sc-101cdir-2 img').attr('src')
      const title = $(div).find('.sc-hmzhuo > h2').text()
      const city = $(div).find('.sc-7l84qu-0 > span').text()
      const value = $(div).find('.sc-192atix-3').text()

      dataObj = {
        img,
        title,
        city,
        value,
      }
      objectData.push(dataObj)
    })
  })

  return objectData
}

module.exports = returnData

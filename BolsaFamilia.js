  //http://www.transparencia.gov.br/swagger-ui.html#/Bolsa32Fam237lia
  //API REST do Portal da Transparência do Governo Federal
  //API de serviços do Portal da Transparência do Governo Federal

const fetch = require('node-fetch')
const moment = require('moment')

class Importer {
  constructor (from, until, ibgeCodes) {
    this.from = moment(from)
    this.until = moment(until)
    this.ibgeCodes = ibgeCodes
  }

  buildUrl (year, month, ibgeCode) {
    return `http://www.transparencia.gov.br/api-de-dados/bolsa-familia-por-municipio?mesAno=${year}${month}&codigoIbge=${ibgeCode}&pagina=1`
  }

  async fetch (url) {
    console.log('loading url', url)
    const res = await fetch(url)
    const json = await res.json()

    console.log('response', json)
    return json
  }

  async fetchIbgeCodeData (ibgeCode) {
    let results = []
    let currentDate = this.from

    while (currentDate <= this.until) {
      let year = currentDate.format('YYYY')
      let month = currentDate.format('MM')
      console.log(year, month)

      let monthResult = await this.fetch(this.buildUrl(year, month, ibgeCode))
      results.push(monthResult)

      currentDate = currentDate.add(1, 'month')
    }
    return results
  }

  async fetchAll () {
    return this.ibgeCodes.map(async (ibgeCode) => {
      const ibgeCodeData = await this.fetchIbgeCodeData(ibgeCode)

      return ibgeCodeData
    })
  }
}

async function main () {
  const importer = new Importer(
    new Date(2018, 0, 1),
    new Date(2018, 10, 1),
    ['4314902']
  )

  const data = await importer.fetchAll() 

  console.log(data)
}

main()

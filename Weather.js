//https://api.hgbrasil.com/weather/?format=json&woeid=455903
const fetch = require('node-fetch')
const RecurringImporter = require('./RecurringImporter')
const BaseImporter = require('./BaseImporter')

class Importer extends BaseImporter {
  constructor(...woeid) {
    super()

    this.woeid = woeid;
  }

  buildUrl(){
    return `https://api.hgbrasil.com/weather/?format=json&woeid=${this.woeid}`
  }

  async import(){
    const results = await this.fetch(this.buildUrl())
    return results
  }
}

const importer = new RecurringImporter(new Importer(455903), 10000)
importer.start()
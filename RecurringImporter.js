class RecurringImporter {
  constructor (importerObj, interval) {
    this.importerObj = importerObj
    this.interval = interval
  }

  start () {
    this.importerObj.import()

    setInterval(() => {
      console.log('recurring execussion')
      this.importerObj.import()
    }, this.interval)
  }
}

module.exports = RecurringImporter
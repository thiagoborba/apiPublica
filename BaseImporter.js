const fetch = require('node-fetch');

class BaseImporter {
  async fetch(url){
    const res = await fetch(url);
    const json = await res.json();
    console.log('response', json)
    return json;
  }
}

module.exports = BaseImporter
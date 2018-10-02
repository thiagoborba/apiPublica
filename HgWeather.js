//https://hgbrasil.com/status/weather/
//Api de previsao do tempo

const fetch = require('node-fetch');

class Weather {
  constructor(locate='pt', format, ...woeid) { //locate = pt or en
    this.locate = locate;
    this.format = format;
    this.woeid = woeid;
  }

  buildUrl() {

    return ` https://api.hgbrasil.com/weather/?format=${format}&woeid=${woeid}&locate=${lang}`
  }

  async fetchData(url){
    buildUrl();
    await fetch(url)
      .then(data => data.json())
      .then(json => console.log(json))
  }

  // async fetchAll(){

  //   await this.woeid.map()
  // }
}

const data = new Weather('json', '457229');

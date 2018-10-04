const fetch = require('node-fetch');

function transform(str) {
  let data = str.split('\n').map(i=>i.split(','));
  let headers = data.shift();
  let output = data.map(d=>{obj = {};headers.map((h,i)=>obj[headers[i]] = d[i]);return obj;});
  console.log(output);
}

fetch('https://vincentarelbundock.github.io/Rdatasets/csv/carData/Arrests.csv')
  .then(response => response.text())
  .then(transform);


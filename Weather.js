const app = require('express')();
const fetch = require('node-fetch');

const fetchData = async () => {

  await fetch('https://api.hgbrasil.com/weather/?format=json&woeid=455903')
    .then(data => data.json())
    .then(json => console.log(json))
};

app.get('/', (req, res) => {

})

app.listen(3000, () => {

  console.log('servidor rodando')
})


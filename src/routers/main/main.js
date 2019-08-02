const fetch = require('node-fetch');
const axios = require('axios');

const url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
const mainRoute = (req, res) => {
    /*axios({
      method: 'get',
      url,
      responseType: 'stream'
    })
        .then(resposne => {
          const contentLenght = resposne.headers['content-length'];
          console.log(contentLenght);

          let value = 0;
          resposne.data.on('data', chunk => {
            value += chunk.length;
            console.log(value * 100 / contentLenght);
          })
          resposne.data.on('end', () => {
            res.send('okixh');
          })
        })*/


    res.set('Access-Control-Expose-Headers','Content-Length');
  res.send('ok');
};

module.exports = mainRoute;

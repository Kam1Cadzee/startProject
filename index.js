const startServer = require('./src/server');
const {port} = require('./config');
const fetch = require('node-fetch');
const allSettled = require('promise.allsettled');
const {AbortController} = require('abort-controller');
const axios = require('axios');


const url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
const signal = axios.CancelToken.source();


setTimeout(() => {
  signal.cancel('Api is being canceled');
}, 100)
axios.get(url, {
    cancelToken: signal.token,
  })
  .then(response => {
      console.log(response.statusText);
  })
  .catch(err => {
    console.log(err);
    console.log(axios.isCancel(err));
  });




startServer(port);


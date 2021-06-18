import axios from 'axios'

const config = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
        'content-type' : 'application/json',
        'Accept': 'application/json',
    }
  };
  

// Base Data
export const getData = () => {
    return axios.get('https://ftx.com/api/markets', config)
  }


  //

  const FTXRest = require('./');

  const ftx = new FTXRest({
    key: 'x',
    secret: 'y',
    subaccount: 'z'
  })
  
  ftx.request({
    method: 'GET',
    path: '/market'
  }).then(console.log);
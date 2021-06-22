import axios from 'axios'
const baseUrl = 'http://localhost:3001/'

const config = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
        'content-type' : 'application/json',
        'Accept': 'application/json',
    }
  };
  

export const getData = () => {
  return axios.get(`${baseUrl}`, config)
}

console.log(getData)
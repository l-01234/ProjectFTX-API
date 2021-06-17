import axios from 'axios'
const baseUrl = 'https://ftx.com/api'

// Base Data
export const getData = () => {
    return axios.get(`${baseUrl}/markets`)
  }



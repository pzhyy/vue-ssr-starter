const axios = require('axios')

const server = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 15000,
  headers: { 'X-Track-Id': Date.now() }
})

module.exports = server

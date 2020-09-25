const Axios = require('axios')

const axios = Axios.create({
  baseURL: 'http://localhost:5000',
})

const Mahasiswa = {}

Mahasiswa.list = () => axios.get('/mahasiswa')
Mahasiswa.insert = (data) => axios.post('/mahasiswa', data)

module.exports = {
  Mahasiswa
}
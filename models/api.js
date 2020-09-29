const Axios = require('axios')

const axios = Axios.create({
  baseURL: 'http://localhost:5000',
})

const Mahasiswa = {}

Mahasiswa.list = () => axios.get('/mahasiswa')
Mahasiswa.insert = (data) => axios.post('/mahasiswa', data)
Mahasiswa.details = (id) => axios.get(`/mahasiswa/${id}`)
Mahasiswa.update = (id, data) => axios.put(`/mahasiswa/${id}`, data)
Mahasiswa.delete = (id) => axios.delete(`/mahasiswa/${id}`)

module.exports = {
  Mahasiswa
}
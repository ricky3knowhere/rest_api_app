const mongoose = require('mongoose')

const mahasiswaSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  birth_date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Mahasiswa', mahasiswaSchema)
const express = require('express')
const route = express.Router()
const { Mahasiswa } = require('../models/api')

//Create
route.post('/', async (req, res) => {
  const data = new Mahasiswa({
    name: req.body.name,
    address: req.body.address
  })
  try {
    const mahasiswa = await data.save()
    res.json(mahasiswa)
  } catch(e) {
    res.send(e.errors)
  }
  
})

//Read
route.get('/', async (req, res) => {
  try {
    const data = await Mahasiswa.find()
    res.json(data)
  } catch(e) {
    res.json({ message: e })
  }
})


//Update
route.put('/:id', async (req, res) => {
  try {
    const data = await Mahasiswa.updateOne({ _id: req.params.id }, {
      name: req.body.name,
      address: req.body.address
    })
    res.json(data)
  } catch(e) {
    res.json({ message: e })
  }
})


//Delete
route.delete('/:id', async (req, res) => {
  try {
    const data = await Mahasiswa.deleteOne({ _id: req.params.id })
    res.json(data)
  } catch(e) {
    res.json({ message: e })
  }
})

//Details
route.details('/:id', async (req, res) => {
  try {
    const data = await Mahasiswa.findOne({ _id: req.params.id })
    res.json(data)
  } catch(e) {
    res.json({ message: e })
  }
})

module.exports = route
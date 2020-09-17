const express = require('express')
const route = express.Router()
const User = require('../models/User')

route.post('/', async (req, res) => {
  const { name, email, password } = req.body
  const data = new User({ name, email, password })
  
  try {
    const register = await data.save()
    res.send(data)
  } catch (e) {
    res.send(e)
  }
})

module.exports = route
const express = require('express')
const route = express.Router()
const User = require('../models/User')
const ncrypt = require('ncrypt-js')

route.post('/', async (req, res) => {
  const { name, email, password } = req.body
  
  const emailIsExist = await User.findOne({ email: email })
console.log(emailIsExist)
  if(emailIsExist)
  return res.send('email has been existed')
 
 
  const hash = new ncrypt('salt')
  const encPass = hash.encrypt(password)
  
  const data = new User({ name, email, password: encPass })
  
  try {
    const register = await data.save()
    res.send(data)
  } catch (e) {
    res.send(e)
  }
})

module.exports = route
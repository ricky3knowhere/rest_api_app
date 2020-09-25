const express = require('express')
const route = express.Router()
const User = require('../models/User')
const ncrypt = require('ncrypt-js')
const { registValidation } = require('../config/validations')

route.post('/', async (req, res) => {
  
  const { error } = registValidation(req.body)
if(error) 
return res.send(error.details[0].message)

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


route.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email })
  if(!user)
  return res.send('email invalid')
  
 const hash = new ncrypt('salt')
  const encPass = hash.encrypt(req.body.password)
  const decPass = hash.decrypt(encPass)
const password = await User.findOne({ password: decPass })

  if(!password)
  return res.send('password incorrect')
  
  return res.send('logged in')
})

module.exports = route
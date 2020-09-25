const express = require("express")
const app = express()

// const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const ejs = require('ejs')

require('dotenv/config')

//Middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.set('view engine', 'ejs');

//app.set('view','html')

//app.use(express.static(__dirname + '/views'));


//Require Routes
const { Mahasiswa } = require('./models/api')

//Require Routes
// const auth = require('./routes/auth')

// app.use('/mahasiswa', mahasiswa)
// app.use('/', auth)
// app.use('/login', auth)

//Connect to DB
// mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
// let db = mongoose.connection
  
// db.on('error', console.error.bind(console, 'failed'))
// db.once('open', () => {
//   console.log('Database connected')
// })

//Routes
app.get('/mahasiswa', async (req, res) => {
  const data = await Mahasiswa.list()
  console.log(data.data)
  res.render('list_mahasiswa.ejs', {data: data.data})

})


app.get('/mahasiswa/new', (req, res) => {
  res.sendFile('form_input.html',{root: __dirname+'/views'})
})

app.post('/mahasiswa', async (req, res) => {
  const insert = await Mahasiswa.insert(req.body)
  if(insert.status === 201)
  redirect('/mahasiswa')
})

app.get('/user/register', (req, res) => {
  res.sendFile('form_regist.html',{root: __dirname+'/views'})
})

app.get('/login', (req, res) => {
  res.sendFile('login.html',{root: __dirname+'/views'})
})
//Listen
app.listen(process.env.PORT, () => {
  console.log('server running at port 3000')
})

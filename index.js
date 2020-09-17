const express = require("express")
const app = express()

const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

require('dotenv/config')

//Middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

//app.set('view','html')

//app.use(express.static(__dirname + '/views'));


//Require Routes
const mahasiswa = require('./routes/mahasiswa')
//Require Routes
const user = require('./routes/user')

app.use('/mahasiswa', mahasiswa)
app.use('/register', user)
//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
let db = mongoose.connection
  
db.on('error', console.error.bind(console, 'failed'))
db.once('open', () => {
  console.log('Database connected')
})

//Routes
app.get('/',(req, res) => res.send('ok'))


app.get('/mahasiswa/new', (req, res) => {
  res.sendFile('form_input.html',{root: __dirname+'/views'})
})

app.get('/user/register', (req, res) => {
  res.sendFile('form_regist.html',{root: __dirname+'/views'})
})
//Listen
app.listen(process.env.PORT, () => {
  console.log('server running at port 3000')
})

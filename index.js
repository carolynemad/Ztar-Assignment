require('dotenv').config();

const express = require('express')
const cors = require('cors')
//const allRoutes = require('express-list-endpoints')
const bodyParser = require('body-parser')
const app = express()

const user = require('./API/Routers/user.router')

const { connectDB } = require('./config/dbConfig')



// add other middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => res.send('Home Page Route'))

app.use('/userAccount', user)

app.use((req, res) => {
  console.log(res)
  res.status(404).send('No such url')
})

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Origin', 'GET, POST, OPTIONS')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, X-Auth-Token, Accept'
  )
  next()
})

connectDB()

const port = process.env.PORT

app.listen(port, () => console.log(`Server up and running on ${port}`))

//Dependencies
const express = require('express')
const app = express()
const postgres = require('./postgres.js')
const cors = require('cors')

//Middleware
app.use(express.json())
app.use(cors())

//Database
postgres.connect()

//Controllers
const certificatesController = require('./controllers/certificates.js')
app.use('/certificate', certificatesController)

//Listeners
app.listen(process.env.PORT || 3000, () => {
  console.log('Certificates is Listening');
})

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('./models/User')
const userRoutes = require('./routes/users')

require('./db')
const app = express()
const PORT = 5000

app.use(cors())
app.use(bodyParser.json())

app.use('/users', userRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

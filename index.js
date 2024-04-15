const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const profileRouter = require('./router/profileRouter')
const authRouter = require('./router/authRouter')

mongoose.connect(process.env.MONGO_DB_URL, {useNewUrlParser: true})

const app = express()
app.use(bodyParser.json())
app.use('/auth',authRouter)
app.use('/profile', profileRouter)

app.listen(8080, () => {
	console.log('Server up at 8080')
})
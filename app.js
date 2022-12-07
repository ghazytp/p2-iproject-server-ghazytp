require('dotenv').config()
const { errorHandler } = require('./middlewares/middlewares')



const express = require('express')
const router = require('./routers')
const app = express()

app.use(router)

app.use(errorHandler)

module.exports = app
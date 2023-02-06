
const express = require("express")

const chartController = require('./controllers/chartController')

const cors = require("cors")

const app = express()

app.use(cors())

app.use(express.json())

app.use("/chart",chartController)

module.exports = app ;


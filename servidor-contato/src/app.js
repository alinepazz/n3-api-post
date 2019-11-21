const express = require("express")
const app = express()
const bodyParser = require("body-parser")


const database = require('./model/database')
database.connect()

//rotas
const index = require("./routes/index")
const contatos = require("./routes/contatosRoute")

app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*")
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})
//middlewere
app.use(bodyParser.json())
app.use("/", index)
app.use("/contatos", contatos)

module.exports = app

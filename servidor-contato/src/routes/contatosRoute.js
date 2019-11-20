const express = require("express")
const router = express.Router()
var bodyParser = require("body-parser")
const controller = require("../controller/contatosController")

router.get("/", controller.getAll)
router.get("/id/:id", controller.getById)
router.get("/nome/:nome", controller.getByName)
router.post("/criar", bodyParser.json(), controller.add)
router.delete("/deletar/:id", controller.deleteById)

module.exports = router

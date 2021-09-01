const express = require('express')

const router = express.Router()

//controladores
const AppControllers = require("../controllers/app.controller")

//app.get("/", funcion)
router.get("/pato", AppControllers.getPato)
router.get("/pato", AppControllers.getWanda)
router.get("/pato", AppControllers.getMichael)

module.exports = router
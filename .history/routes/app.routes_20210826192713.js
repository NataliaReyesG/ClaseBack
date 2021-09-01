const express = require('express')

const router = express.Router()

//controladores
const AppControllers = require("../controllers/app.controller")

//app.get("/", funcion)
router.get("/pato", AppControllers.getPato)
router.get("/wanda", AppControllers.getWanda)
router.get("/michael", AppControllers.getMichael)

module.exports = router
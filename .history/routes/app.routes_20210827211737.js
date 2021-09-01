const express = require('express')

const router = express.Router()

//controladores
const AppControllers = require("../controllers/app.controller")

//app.get("/", funcion)
router.get("/pato", AppControllers.getPato)
router.get("/wanda", AppControllers.getWanda)
router.get("/michael", AppControllers.getMichael)
router.post("/say-my-name", AppControllers.sayMyName)
router.put("/update-a-name/:idName", AppControllers.upadateName)
router.delete("/delete-a-name/:idName/:pato", AppControllers.deleteName)

//mongo connect
router.post("/createPerson", AppControllers.createPerson) 
router.put("/updatePerson/:personId", AppControllers.updatePerson)
router.get("/getPerson/:personId", AppControllers.getPersonById)
router.get("/getAllPersons", AppControllers.getAllPersons)
router.delete("/deletePerson/:personId", AppControllers.deletePerson)

module.exports = router
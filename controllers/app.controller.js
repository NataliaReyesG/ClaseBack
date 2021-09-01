// requerir el modelo
const Person = require('../models/Person')

const appController = {}

/*
{
    getPato: () => {}
    getPato: () => {}
    getPato: () => {}
    getPato: () => {}
}
*/



/*appController.sayMyName = (req, res) => {
    /* your code here 
    const name = req.body.name
    console.log(req)
    res.status(200).json({message: `Hi ${name}`})
}

appController.upadateName = (req, res) => {
    const idName = req.params.idName
    const name = req.body
    console.log(req.params)
    res.status(200).json({message: `Hi ${name}, name updated!`, idName: idName})
}

appController.deleteName = (req, res) => {
    const idName = req.params.idName
    console.log(req.params)
    res.status(200).json({message: `name Deleted!`, idName: idName})
}*/

appController.createPerson = async (req, res) => {

    try {
        const newPerson = new Person({
            name: req.body.name,
            lastName: req.body.lastName,
            age: req.body.age,
            username: req.body.username,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password
        })
    
        await newPerson.save()
        
        res.status(201).json({message: "Usuario creado"})
    } catch (error) {
        res.status(400).json({message: "Error al crear el usuario", error: error})
    }
}

/*appController.updatePerson = async (req, res) => {

    try {
        const id = req.params.personId
        const obj = req.body
        
        const updaded = await Person.findByIdAndUpdate(id, obj, {new: true})

        //console.log(updaded)
        if(updaded){
            res.status(202).json({message: "usuario actualizado"}) // si se actualizo
        } else {
            res.status(401).json({message: "usuario no existe"}) // si no encontro el elemnto
        }
    } catch (error) {
        res.status(400).json({message: "Error", error: error}) // error en BD
    }
}*/

appController.getPersonById = async (req, res) => {
    try {
        const person = await Person.findById(req.params.personId)

        if(person){
            res.status(200).json({message: "Persona encontrada", person: person}) // si se actualizo
        } else {
            res.status(202).json({message: "Persona no existe"}) // si no encontro el elemnto
        }

    } catch (error) {
        res.status(400).json({message: "Error", error: error})
    }
}

appController.getAllPersons = async (req, res) => {
    try {
        const persons = await Person.find()

        if(persons){
            res.status(200).json({message: "todas las personas", persons: persons}) // si se actualizo
        } else {
            res.status(401).json({message: "Persons empty!"}) // si no encontro el elemnto
        }

    } catch (error) {
        res.status(400).json({message: "Error", error: error})
    }
}

appController.deletePerson = async (req, res) => {
    try {
        const deleted = await Person.findByIdAndDelete(req.params.personId)
        
        res.status(202).json({message: "Usuario eliminado"})
    } catch (error) {
        res.status(400).json({message: "Error", error: error})
    }
}

/*ejercicio avanzado

appController.getAllPersons = async (req, res) => {
    try {
        const persons = await Person.find()

        if(persons){
            res.status(200).json({message: "todas las personas", persons: persons}) // si se actualizo
        } else {
            res.status(401).json({message: "Persons empty!"}) // si no encontro el elemnto
        }

    } catch (error) {
        res.status(400).json({message: "Error", error: error})
    }
}*/

module.exports = appController
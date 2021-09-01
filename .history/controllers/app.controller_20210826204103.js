// requerir el modelo

const appController = {}

/*
{
    getPato: () => {}
    getPato: () => {}
    getPato: () => {}
    getPato: () => {}
}
*/

appController.getPato = (req, res) => {
    res.status(200).json({message: "soy un pato"})
}

appController.getWanda = (req, res) => {
    res.status(200).json({message: "soy Wanda"})
}

appController.getMichael = (req, res) => {
    res.status(200).json({message: "soy Michael"})
}

appController.sayMyName = (req, res) => {
    const name = req.body.name
    console.log(req)
    res.status(200).json({message: `Hi ${name}`})
}

appController.upadateName = (req, res) => {
    const idName = req.params.idName
    const name = req.body
    console.log(req)
    res.status(200).json({message: `Hi ${name}, name updated!`})
}

appController.deleteName = (req, res) => {
    const idName = req.params.idName
    console.log(req)
    res.status(200).json({message: `name Deleted!`})
}

module.exports = appController
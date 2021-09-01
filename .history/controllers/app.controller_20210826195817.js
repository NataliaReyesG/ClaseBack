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

appController.getMichael = (req, res) => {
    const name = req.body.name
    console.log(req)
    res.status(200).json({message: `Hi ${name}`})
}

module.exports = appController
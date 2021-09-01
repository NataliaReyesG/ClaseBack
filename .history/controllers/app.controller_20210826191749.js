// requerir el modelo

const appController = {}

appController.getPato = (req, res) => {
    res.status(200).json({message: "soy un pato"})
}

appController.getWanda = (req, res) => {
    res.status(200).json({message: "soy Wanda"})
}

appController.getMichael = (req, res) => {
    res.status(200).json({message: "soy Michael"})
}

module.exports = appController
// requerir el modelo

const appController = {}

appController.getPato = (req, res) => {
    res.status(200).json({message: "soy un pato"})
}
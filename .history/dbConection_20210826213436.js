const mongoose = require("mongoose")

const atlas = "mongodb+srv://striker:compaq*@clusterstriker.ysjmi.mongodb.net/nodeApp?retryWrites=true&w=majority"
const local = "mongodb://localhost/dbName"

mongoose.connect(atlas, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => console.log("Base de datos conectada"))
    .catch(err => console.log(err))

module.exports = mongoose
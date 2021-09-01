const mongoose = require("mongoose")

const atlas = "mongodb+srv://striker:<password>@clusterstriker.ysjmi.mongodb.net/nodeApp?retryWrites=true&w=majority"
const local = "mongodb://localhost/dbName"

mongoose.connect(atlas, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(db => console.log("Base de datos conectada"))
    .catch(err => console.log(err))
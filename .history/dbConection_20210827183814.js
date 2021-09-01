//requerir modulo mongoose
const mongoose = require("mongoose");

//url de conexion
const atlas =
  "mongodb+srv://striker:compaq*@clusterstriker.ysjmi.mongodb.net/nodeApp?retryWrites=true&w=majority";

//hacer la conexion
mongoose
  .connect(atlas, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((db) => console.log("Conexion a mongoDB exitosa :)"))
  .catch((err) => console.log(err));

module.exports = mongoose;

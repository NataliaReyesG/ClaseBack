const express = require("express");
const morgan = require("morgan");

//importar la conexion a la base de datos
const db = require('./database')

//importacion de rutas
const appRoutes = require("./routes/app.routes");

const app = express();

//conf
const port = 5000;

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/app", appRoutes);

//ejecucion del app
app.listen(port, () => console.log("Servidor escuchando el puerto", port));

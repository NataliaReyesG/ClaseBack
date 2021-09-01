const express = require("express");
const morgan = require("morgan");

const app = express();

//conf
const port = 5000

app.use(morgan("dev"));
app.use(express.json());

//routes

//ejecucion del app
app.listen(port, () => console.log("Servidor escuchando el puerto", port));

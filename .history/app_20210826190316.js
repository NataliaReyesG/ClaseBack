const express = require("express");
const morgan = require("morgan");

const app = express();

//conf
const port = 5000

//middlewares 
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/app", require("./routes/app.routes"))

//ejecucion del app
app.listen(port, () => console.log("Servidor escuchando el puerto", port));

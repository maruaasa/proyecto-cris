const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();


const app = express();


// Permitir conexión con React
app.use(cors());


// Recibir datos JSON
app.use(express.json());



// Conexión MongoDB

mongoose.connect(process.env.MONGO_URI)

.then(() => {

    console.log("MongoDB conectado correctamente");

})

.catch((error) => {

    console.log("Error al conectar MongoDB:", error);

});




// Ruta de prueba

app.get("/", (req,res)=>{

    res.send("Servidor backend funcionando");

});




// Puerto del servidor

const PORT = 5000;


app.listen(PORT,()=>{

    console.log(`Servidor iniciado en puerto ${PORT}`);

});
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conexión a MongoDB establecida.");
  } catch (error) {
    console.error("Error al conectar con MongoDB:");
    console.error(error.message);
  }
};

connectDatabase();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "API operativa."
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
require("dotenv").config(); //charge les variables d'environnement
const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public")); //Servir les fichiers statiques du dossier public (index.html)

//app.get("/", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

const express = require("express");
const path = require("path");
const routes = require("./routes/routes");
const connectToDb = require("./database/db");

connectToDb(); // Conexão com o banco de dados

const app = express();
const port = 3000;

app.use(express.json()); // Middleware para parsear JSON

app.set("view engine", "ejs"); // Configuração do EJS como motor de visualização
app.use(express.static(path.join(__dirname, "public"))); // Servir arquivos estáticos
app.use(express.urlencoded()); // Middleware para parsear URL-encoded

app.use(routes); // Uso das rotas definidas

app.listen(3000, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
); // Inicialização do servidor

const express = require("express");
const path = require("path");
const app = express();
const port = 3002;

console.log("Node.js está funcionando!");

// Arquivos estáticos
app.use(express.static(path.join(__dirname, "app/public")));

// Configuração do mecanismo de visualização
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "app/views"));

// Middleware para JSON e URL encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
var rotas = require(path.join(__dirname, "app/routes/router"));
app.use("/", rotas);



// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}\nhttp://localhost:${port}`);
});

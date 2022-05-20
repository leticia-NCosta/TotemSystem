// process.env.AMBIENTE_PROCESSO = "desenvolvimento";
process.env.AMBIENTE_PROCESSO = "desenvolvimento";

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = 3000;

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/empresa");
var estacaoRouter = require("./src/routes/estacao");
var mapaRouter = require("./src/routes/mapa");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/estacoes", estacaoRouter);
app.use("/mapa", mapaRouter);


app.listen(PORTA, function () {
  console.log(`Aplicação Rodando`);
});

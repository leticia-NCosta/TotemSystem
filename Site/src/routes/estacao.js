var express = require("express");
var router = express.Router();

var estacaoController = require("../controllers/estacaoController")

router.get("/buscar-todos", function (req, res) {
  estacaoController.buscarTodos(req, res);
});

router.get("/dashboard", function (req, res) {
  estacaoController.buscarDashboard(req, res);
});

router.get("/totens-por-estacao", function (req, res) {
  estacaoController.totensPorEstacao(req, res)
});

module.exports = router
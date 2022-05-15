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

router.post("/cadastrarEstacao", function(req, res){
  empresaController.cadastrarEstacao(req,res);
})

router.put("/atualizarEstacao", function(req, res){
  empresaController.atualizarEstacao(req,res);
})



module.exports = router
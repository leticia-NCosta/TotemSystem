var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/empresaController");

router.get("/", function (req, res) {
  empresaController.testar(req, res);
});

router.get("/listar", function (req, res) {
  empresaController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
  empresaController.cadastrar(req, res);
})


router.put("/atualizarTotem/:idTotem", function(req, res) {
  empresaController.atualizarTotem(req, res);
})


router.put("/atualizar/:email", function(req, res) {
  empresaController.atualizar(req, res);
})

router.post("/autenticar", function (req, res) {
  empresaController.entrar(req, res);
});

router.post("/cadastrarEstacao", function(req, res){
  empresaController.cadastrarEstacao(req,res);
})

router.post("/cadastrarColaborador", function(req, res){
  empresaController.cadastrarColaborador(req,res);
})

router.put("/atualizarColaborador", function(req, res){
  empresaController.atualizarColaborador(req,res);
})


router.post("/cadastrarTotem", function(req, res){
  empresaController.cadastrarTotem(req,res);
})

router.delete("/deletarTotem/:idTotem", function(req, res) {
  empresaController.deletarTotem(req, res);
})
module.exports = router;

var express = require("express");
var router = express.Router();




router.post("/cadastrarTotem", function(req, res){
    empresaController.cadastrarTotem(req,res);
  })
  

  router.put("/atualizarTotem/:idTotem", function(req, res) {
    empresaController.atualizarTotem(req, res);
  })
  
  router.delete("/deletarTotem/:idTotem", function(req, res) {
    empresaController.deletarTotem(req, res);
  })

  module.exports = router;
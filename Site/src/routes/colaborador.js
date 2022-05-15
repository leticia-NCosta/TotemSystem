var express = require("express");
var router = express.Router();


router.post("/cadastrarColaborador", function(req, res){
    empresaController.cadastrarColaborador(req,res);
  })
  
  router.put("/atualizarColaborador", function(req, res){
    empresaController.atualizarColaborador(req,res);
  })

  
module.exports = router;
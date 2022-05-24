var express = require("express");
var router = express.Router();

var totemController = require("../controllers/totemController")


router.post("/cadastrarTotem", function(req, res){
    totemController.cadastrarTotem(req,res);
  })
  

  router.put("/atualizarTotem/:idTotem", function(req, res) {
    totemController.atualizarTotem(req, res);
  })
  
  router.delete("/deletarTotem/:idTotem", function(req, res) {
    totemController.deletarTotem(req, res);
  })

  module.exports = router;
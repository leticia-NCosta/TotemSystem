var { Router } = require("express");
var router = Router();

var mapaController = require("../controllers/mapaController");

router.get("/buscarDadosMapas/:idEstacao", function(req, res) {
    mapaController.buscarDadosMapas(req, res);
})

module.exports = router;
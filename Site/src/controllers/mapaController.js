const res = require('express/lib/response');
var mapaModel = require("../models/mapaModel");

function buscarDadosMapas(req, res) {

  const { idEstacao } = req.params;
  
    mapaModel.buscarDadosMapas(idEstacao)
      .then(function (resultado) {
        if (resultado.length > 0) {
          res.status(200).json(resultado);
        } else {
          res.status(204).send("Nenhum resultado encontrado!");
        }
      }).catch(function (erro) {
        console.log(erro);
        console.log(
          "Houve um erro ao realizar a consulta! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }






  module.exports = { buscarDadosMapas }
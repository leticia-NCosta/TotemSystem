const res = require('express/lib/response');
var estacaoModel = require('../models/estacaoModel')

function buscarTodos(req, res) {
  estacaoModel.buscarTodos()
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

function buscarDashboard(req, res) {
  estacaoModel.buscarDashboard()
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

function totensPorEstacao(req, res) {
  estacaoModel.totensPorEstacao().then(function (resultado) {
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


function cadastrarEstacao(req, res){
  var linha = req.body.linhaServer;
  var cidade = req.body.cidadeServer;
  var bairro = req.body.bairroServer;
  var quantTotem = req.body.quantTotemServer;
  

  if (linha == undefined) {
    res.status(400).send("Sua linha está undefined!");
} else if (cidade == undefined) {
    res.status(400).send("Sua cidade está undefined!");
} else if (bairro == undefined) {
    res.status(400).send("Seu bairro está undefined!");
} else if (quantTotem == undefined){
  res.status(400).send("Seu quantTotem está undefinied")
}
    
    empresaModel.cadastrarEstacao(linha, cidade, quantTotem, bairro)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );

}

 




module.exports = { buscarTodos, buscarDashboard, totensPorEstacao, cadastrarEstacao }
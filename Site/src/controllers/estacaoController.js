const res = require('express/lib/response');
var estacaoModel = require('../models/estacaoModel')

function dadosTotens(req, res) {
  estacaoModel.dadosTotensMem(req.body.hostname)
    .then(function (resultado) {
      estacaoModel.dadosTotensVol(req.body.hostname)
        .then(function (resultadoCpu) {
          estacaoModel.dadosTotensServicos(req.body.hostname)
            .then(function (resultadoServico) {
              estacaoModel.dadosTotensProcessos(req.body.hostname)
                .then(function (resultadoProcesso) {
                  if (resultado.length > 0) {
                    res.status(200).json({ memoria: resultado, volume: resultadoCpu, servicos: resultadoServico, processos: resultadoProcesso });
                  } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                  }
                })
            })
        })
    }).catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao realizar a consulta! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });

}

function totensPorEmpresa(req, res) {
  estacaoModel.totensPorEmpresa(req.body.idEmpresa, req.body.estacaoNome)
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

function estacoesPorEmpresa(req, res) {
  estacaoModel.estacoesPorEmpresa(req.params.idEmpresa).then(function (resultado) {
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



function cadastrarEstacao(req, res) {
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
  } else if (quantTotem == undefined) {
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






module.exports = { dadosTotens, totensPorEmpresa, estacoesPorEmpresa, cadastrarEstacao }
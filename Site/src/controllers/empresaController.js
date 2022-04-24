var empresaModel = require("../models/empresaModel");

function testar(req, res) {
  console.log("ENTRAMOS NA empresaController");
  res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
  empresaModel
    .listar()
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao realizar a consulta! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function cadastrar(req, res) {
  var cnpj = req.body.cnpjServer;
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;


  if (cnpj == undefined) {
      res.status(400).send("Seu cnpj está undefined!");
  } else if (email == undefined) {
      res.status(400).send("Seu email está undefined!");
  } else if (senha == undefined) {
      res.status(400).send("Sua senha está undefined!");
  } 
      
      empresaModel.cadastrar(cnpj, email, senha)
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
  function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        empresaModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

    function atualizar(req, res){

        console.log("atualizar", req.body)
        var razaoSocial = req.body.razaoSocialServer;
        var ruaEmpresa = req.body.ruaServer;
        var numeroEmpresa = req.body.numeroServer;
        var complementoEmpresa = req.body.complementoServer;
        var telefoneEmpresa = req.body.telefoneServer;
        var email = req.params.email;

        if (razaoSocial == '') {
            res.status(400).send('Razao social não está definida!');
          } else if (ruaEmpresa == '') {
            res.status(400).send('Rua não definido!');
          } else if (numeroEmpresa == '') {
            res.status(400).send('Numero não definido!');
          } else if (complementoEmpresa == '') {
            res.status(400).send('Complemento não definido!');
          } else if (telefoneEmpresa == '') {
            res.status(400).send('Telefone não definido!');
          } else {
            empresaModel
              .atualizar(email, razaoSocial, ruaEmpresa, numeroEmpresa, complementoEmpresa, telefoneEmpresa)
              .then(function (resultado) {
                res.json(resultado);
              })
              .catch(function (erro) {
                console.log(erro);
                console.log(
                  '\nHouve um erro ao realizar a edição! Erro: ',
                  erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
              });
          }
        
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

    function cadastrarColaborador(req, res){
      var nome = req.body.nomeServer;
      var cpf = req.body.cpfServer;
      var cargo = req.body.cargoServer;
      var telefone = req.body.telefoneServer;
      var email = req.body.emailServer;
      var senha = req.body.senhaServer;

      if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (cpf == undefined) {
        res.status(400).send("Seu cpf está undefined!");
    } else if (cargo == undefined) {
        res.status(400).send("Seu cargo está undefined!");
    } else if (telefone == undefined){
      res.status(400).send("Seu telefone está undefinied")
    } else if (email == undefined){
      res.status(400).send("Seu email está undefinied")
    } else if (senha == undefined){
      res.status(400).send("Sua senha está undefinied")
    }
        
        empresaModel.cadastrarColaborador(nome, cpf, cargo, telefone, email, senha)
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

    function cadastrarTotem(req, res){
      var modelo = req.body.modeloServer;
      var marca = req.body.marcaServer;
      var dataImplementacao = req.body.dataImplementacaoServer;
      var dataFabricacao = req.body.dataFabricacaoServer;

      if (modelo == undefined) {
        res.status(400).send("Seu modelo está undefined!");
    } else if (marca == undefined) {
        res.status(400).send("Sua marca está undefined!");
    } else if (dataImplementacao == undefined) {
        res.status(400).send("Sua data de implementacao está undefined!");
    } else if (dataFabricacao == undefined){
      res.status(400).send("Sua data de fabricacao está undefinied")
    } 
        
        empresaModel.cadastrarColaborador(modelo, marca, dataImplementacao,dataFabricacao)
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

module.exports = {
  listar,
  testar,
  cadastrar,
  entrar,
  atualizar,
  cadastrarEstacao,
  cadastrarColaborador,
  cadastrarTotem
};

var database = require("../database/config");

function cadastrarTotem(hostname, dataImplementacao, modelo, marca, dataFabricacao){
    var instrucao = `
      INSERT INTO tb_totem (hostname, data_implementacao, modelo, marca, data_fabricacao) VALUES ( '${hostname}', '${dataImplementacao}', '${modelo}', '${marca}', '${dataFabricacao}')
    `;
  
    return database.executar(instrucao)
  }
  
  
  function atualizarTotem(idTotem,dataImplementacao, modelo, marca, dataFabricacao){
    var instrucao = `
      UPDATE tb_totem SET data_implementacao = '${dataImplementacao}', modelo = '${modelo}', marca = '${marca}', data_fabricacao = '${dataFabricacao}' WHERE ID_TOTEM = ${idTotem} 
    `;
  
    return database.executar(instrucao)
  }
  
  
  
  function deletarTotem(idTotem){
    var instrucao = `
      DELETE FROM tb_totem WHERE ID_TOTEM = ${idTotem} 
    `;
  
    return database.executar(instrucao)
  }

  module.exports = {
      cadastrarTotem,
      deletarTotem,
      atualizarTotem
  }
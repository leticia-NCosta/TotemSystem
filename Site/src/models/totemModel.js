var database = require("../database/config");

function cadastrarTotem(dataImplementacao, modelo, marca, dataFabricacao){
    var instrucao = `
      INSERT INTO tb_totem (data_implementacao, modelo, marca, data_fabricacao) VALUES ( '${dataImplementacao}', '${modelo}', '${marca}', '${dataFabricacao}')
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
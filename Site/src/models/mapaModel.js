var database = require("../database/config");

function buscarDadosMapas(idEstacao) {
   return database. executar(`select id_estacao, latitude_estacao, longitude_estacao, hostname from  tb_estacao 
   join tb_totem where id_estacao ='${idEstacao}'`);
  }


  module.exports = { buscarDadosMapas }
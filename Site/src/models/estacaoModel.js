var database = require("../database/config");

function buscarTodos() {
  return database.executar('select * from tb_estacao');
}

function buscarDashboard() {
  return database.executar('select sistema_operacional from tb_totem');
}

function totensPorEstacao() {
  return database.executar('select te.linha_estacao, COUNT(tt.id_totem) as quantidade_totens from tb_estacao te left join tb_totem tt on te.id_estacao = tt.fk_estacao GROUP by te.linha_estacao')
}

module.exports = { buscarTodos, buscarDashboard, totensPorEstacao }
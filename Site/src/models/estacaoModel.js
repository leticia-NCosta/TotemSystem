var database = require("../database/config");

function dadosTotensMem(hostname) {
  return database.executar(`SELECT memoria_uso, memoria_disponivel from tb_log tl where fk_hostname = '${hostname}' order by id_log  desc limit 1`);
}

function dadosTotensVol(hostname) {
  return database.executar(`SELECT volume_em_uso, volume_disponivel from tb_log tl where fk_hostname = '${hostname}' order by id_log  desc limit 1`);
}

function dadosTotensServicos(hostname) {
  return database.executar(`SELECT total_servicos_ativos, total_servicos_inativos from tb_log tl where fk_hostname = '${hostname}' order by id_log  desc limit 1`);
}

function dadosTotensProcessos(hostname) {
  return database.executar(`SELECT total_processos, data_atual from tb_log tl where fk_hostname = '${hostname}' order by id_log  desc limit 5`);
}

function totensPorEmpresa(idEmpresa, nomeEstacao) {
  return database.executar(`select tt.hostname, te.nome_estacao from tb_totem tt inner join tb_estacao te on tt.fk_estacao = te.id_estacao where te.fk_empresa = ${idEmpresa} and te.nome_estacao = '${nomeEstacao}'`);
}

function estacoesPorEmpresa(idEmpresa) {
  return database.executar(`select te.nome_estacao, COUNT(tt.hostname) as quantidade_totens from tb_estacao te left join tb_totem tt on te.id_estacao = tt.fk_estacao where te.fk_empresa = ${idEmpresa} GROUP by te.nome_estacao`)
}

function cadastrarEstacao(linha, cidade, quantTotem, bairro){
  var instrucao = `
    INSERT INTO tb_estacao (linha_estacao, cidade_estacao, quant_totem, bairro_estacao) VALUES ('${linha}', '${cidade}', '${quantTotem}', '${bairro}')
  `;

  return database.executar(instrucao)
}

module.exports = { dadosTotensMem, dadosTotensVol, dadosTotensServicos, dadosTotensProcessos, totensPorEmpresa, estacoesPorEmpresa, cadastrarEstacao }
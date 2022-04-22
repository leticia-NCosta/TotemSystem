var database = require("../database/config");

function listar() {
  var instrucao = ``;
  console.log("Listando Usuários");
  return database.executar(instrucao);
}


function cadastrar(cnpj, email, senha) {
  console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", cnpj, email, senha);
  var instrucao = `
      INSERT INTO tb_empresa (cnpj, email, senha) VALUES ('${cnpj}', '${email}', md5('${senha}'));
  `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function entrar(email, senha) {
  console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
  var instrucao = `
      SELECT * FROM tb_empresa WHERE email = '${email}' AND senha = md5('${senha}');
  `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  listar,
  cadastrar,
  entrar,
};

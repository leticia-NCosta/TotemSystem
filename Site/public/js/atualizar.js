
function atualizarCadastro(){
    var email = localStorage.getItem("EMAIL_EMPRESA");
    console.log(email)
    atualizar(email)
}

function atualizar(email){
    console.log(email)
    var razaoSocial = input_razao_social.value;
    var rua = input_rua.value;
    var numero = parseInt(input_numero.value);
    var complemento = input_complemento.value;
    var telefone = input_telefone.value;
  
    fetch(`/usuarios/atualizar/${email}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: email,
            razaoSocialServer: razaoSocial,
            ruaServer: rua,
            numeroServer: numero,
            complementoServer: complemento,
            telefoneServer: telefone,
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            window.alert("Cadastro atualizado com sucesso!");
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        //finalizarAguardar();
    });

    return false;
}

// const { json } = require("express/lib/response");

function atualizarCadastro(){
    var email = localStorage.getItem("EMAIL_EMPRESA");
    console.log(email)
    atualizar(email)
}

function atualizar(email){
    console.log(email)
    var razaoSocial = input_razao_social.value;
    var rua = input_rua.value;
    var numero = input_numero.value;
    var complemento = input_complemento.value;
    var telefone = input_telefone.value;
    // console.log(razaoSocial)
    // console.log(rua)
    // console.log(numero)
    // console.log(complemento)
    // console.log(telefone)
  
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
            // console.log(razaoSocialServer)
            // console.log(ruaServer)
            // console.log(numeroServer)
            // console.log(complementoServer)
            // console.log(telefoneServer)
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        //finalizarAguardar();
    });

    return false;
}

// var razao = localStorage.getItem('RAZAO_SOCIAL')
// console.log(razao)
// bd_razao.innerHTML = razao

// var rua = localStorage.getItem('RUA_EMPRESA')
// console.log(rua)
// bd_rua.innerHTML = rua

// var numero = localStorage.getItem('NUMERO_EMPRESA')
// console.log(numero)
// bd_numero.innerHTML = numero

// var complemento = localStorage.getItem('COMPLEMENTO_EMPRESA')
// console.log(complemento)
// bd_comp.innerHTML = complemento

// var telefone = localStorage.getItem('TELEFONE_EMPRESA')
// console.log(telefone)
// bd_telefone.innerHTML = telefone
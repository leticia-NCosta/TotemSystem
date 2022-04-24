function cadastrarColaborador(){
        
    var nome = input_nome.value;
    var cpf = input_cpf.value;
    var cargo = input_cargo.value;
    var telefone = input_telefone.value;
    var email = input_email.value;
    var senha = input_senha.value;



    fetch("/usuarios/cadastrarColaborador", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nomeServer: nome,
            cpfServer: cpf,
            cargoServer: cargo,
            telefoneServer: telefone,
            emailServer: email,
            senhaServer: senha
        })
    }).then(function (resposta) {
        // console.log(linhaServer, cidadeServer, bairroServer, quantTotemServer)
        console.log("resposta: ", resposta);
        // console.log(linhaServer, cidadeServer, bairroServer, quantTotemServer) 


        if (resposta.ok) {
            window.alert("Cadastro do colaborador realizado com sucesso!");
            // console.log(linhaServer, cidadeServer, bairroServer, quantTotemServer)
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
            // console.log(linhaServer, cidadeServer, bairroServer, quantTotemServer)
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        //finalizarAguardar();
    });

    return false
}
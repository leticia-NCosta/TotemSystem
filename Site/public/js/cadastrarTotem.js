function cadastrarTotem(){
        
    var marca = input_marca.value;
    var modelo = input_modelo.value;
    var dataImplementacao = input_data_implementacao.value;
    var dataFabricacao = input_data_fabricacao.value;
    


    fetch("/usuarios/cadastrarTotem", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            marcaServer: marca,
            modeloServer: modelo,
            dataImplementacaoServer: dataImplementacao,
            dataFabricacaoServer: dataFabricacao
        })
    }).then(function (resposta) {
        // console.log(linhaServer, cidadeServer, bairroServer, quantTotemServer)
        console.log("resposta: ", resposta);
        // console.log(linhaServer, cidadeServer, bairroServer, quantTotemServer) 


        if (resposta.ok) {
            window.alert("Cadastro do totem realizado com sucesso!");
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
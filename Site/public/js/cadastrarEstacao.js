function cadastrarEstacao(){
        
    var linha = input_linha.value;
    var cidade = input_cidade.value;
    var bairro = input_bairro.value;
    var quantTotem = input_quant_totem.value;
    console.log(linha, cidade, bairro, quantTotem)


    fetch("/usuarios/cadastrarEstacao", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            linhaServer: linha,
            cidadeServer: cidade,
            bairroServer: bairro,
            quantTotemServer: quantTotem
        })
    }).then(function (resposta) {
        // console.log(linhaServer, cidadeServer, bairroServer, quantTotemServer)
        console.log("resposta: ", resposta);
        // console.log(linhaServer, cidadeServer, bairroServer, quantTotemServer) 


        if (resposta.ok) {
            window.alert("Cadastro realizado com sucesso!");
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
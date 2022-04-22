function abrirEntrar(){
    
    input_cnpj.value = ``
    input_email.value = ``
    input_senha.value = ``
    input_email_entrar.value = ``
    input_senha_entrar.value = ``

    if(modalId.style.display == "none"){
        modalId.style.display = "flex"
        container_home.style.display = "none"
    } else {
        modalId.style.display = "none"
        container_home.style.display = "block"
    }

}

function naoTenhoConta(){

    loginId.style.display = "none"
    cadastroId.style.display = "flex"

}

function jaPossuoConta(){

    cadastroId.style.display = "none"
    loginId.style.display = "flex"

}

function entrar(){

    var emailVar = input_email_entrar.value;
    var senhaVar = input_senha_entrar.value;

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    // TODO: VERIFICAR AS VALIDAÇÕES QUE ELES ESTÃO APRENDENDO EM ALGORITMOS 
    if (emailVar == "" || senhaVar == "") {
        window.alert("Preencha todos os campos para prosseguir!");
        //finalizarAguardar();
        return false;
    }

    if (emailVar.indexOf("@") == -1 || emailVar.indexOf(".com") == -1) {
        window.alert("Ops, e-mail inválido! Verifique e tente novamente.");
        //finalizarAguardar();
        return false;
    }

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));


                sessionStorage.EMAIL_USUARIO = json.EMAIL_USUARIO;
                sessionStorage.NOME_USUARIO = json.NOME_USUARIO;
                sessionStorage.ID_USUARIO = json.ID_USUARIO;

                localStorage.setItem('EMAIL_USUARIO',json.EMAIL_USUARIO)
                localStorage.setItem('NOME_USUARIO',json.NOME_USUARIO)
                localStorage.setItem('ID_USUARIO',json.ID_USUARIO)

                setTimeout(function () {
                    window.location = "../user.html";
                }, 1000); // apenas para exibir o loading

            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
                //finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}


function abrirEntrar(){

    if(modalId.style.display == "none"){
        modalId.style.display = "flex"
    } else {
        modalId.style.display = "none"
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

    window.location = "./user.html"

}
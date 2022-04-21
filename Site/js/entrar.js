function abrirEntrar(){

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

    window.location = "./user.html"

}
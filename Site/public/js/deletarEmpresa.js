function deletarEmpresa(email) {

    fetch(".usuarios/deletar/" + email, {
        method: "DELETE"
    }).then(function (resposta) {
        resposta.json().then(json =>{
            alert("Empresa removida com sucesso")
        })
    })
    
}
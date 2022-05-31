function deletarTotem(hostname) {

    console.log(hostname)
    fetch(`/deletarTotem/${hostname}`, {
        method: "DELETE"
    }).then(function (resposta) {
            alert("Totem removido com sucesso")
            console.log(resposta)
        })
}
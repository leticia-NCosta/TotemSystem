function deletarTotem(hostname) {

    hostname = sessionStorage.getItem("HOSTNAME")
    console.log(hostname)
    
    fetch(`totem/deletarTotem/${hostname}`, {
        method: "DELETE"
    }).then(function (resposta) {
            alert("Totem removido com sucesso")
            window.location = "./dashboard.html"
            console.log(resposta)
        })
}
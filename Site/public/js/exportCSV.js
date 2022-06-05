function exportar(hostname) {
  // var  = [];
  // var quantidadeTotens = [];
  const rows = [];

  hostname = sessionStorage.getItem("HOSTNAME")

  fetch(`totem/getTotemLog/${hostname}`, {
    method: "GET",
  }).then(function (resposta) {
    resposta.json().then(() => {

    var encodedUri = encodeURI();
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${hostname}`);
    document.body.appendChild(link); // Required for FF
  
    link.click(); // This will download the data file named "my_data.csv".
    });
  });



}

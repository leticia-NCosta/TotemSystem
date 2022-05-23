function exportar() {

    var nome_estacao = [];
    var linha_estacao = [];


  // fetch("/estacoes/buscar-todos", {
  //   method: "GET",
  // }).then((resposta) => {
  //   if (resposta.status == 200) {
  //     resposta.json().then((json) => {
  //       for (let index = 0; index < json.length; index++) {
  //         nome_estacao.push(json[index].nome_estacao);
  //         console.log(json[index].nome_estacao);
  //         linha_estacao.push(json[index].linha_estacao);
  //       }
  //     });
  //   }

    const rows = [
        "nome", 
         "Linha" 
    ];

    let csvContent = "data:text/csv;charset=utf-8,";

    rows.forEach(function (rowArray) {
      let row = rowArray.join(",");
      csvContent += row + "\r\n";
    });

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "my_data.csv");
    document.body.appendChild(link); // Required for FF

    link.click(); // This will download the data file named "my_data.csv".
}

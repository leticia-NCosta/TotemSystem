var lista_regioes = []
var quant_totens = []

var rand = (Math.random() * (lista_regioes.length - 1)).toFixed(0)
var local = lista_regioes[rand]
var rand_alert = 0;
var regiao_alerta;
var alerta_piscando = false;



function main() {

    criarBotoes()

    setTimeout(() => {
        verCorBotao();
    }, 500)

}


function verCorBotao() {

    var botao = document.getElementsByClassName('botoes_sidebar');
    var botao_red;

    for (let i = 0; i < botao.length; i++) {
        if (botao[i].style.backgroundColor == 'red') {
            botao_red = botao[i]
            regiao_alerta = botao_red.id
        }
    }

    setInterval(() => {

        if (botao_red.style.backgroundColor == 'red') {
            botao_red.style.backgroundColor = 'black'
        } else if (botao_red.style.backgroundColor == 'black') {
            botao_red.style.backgroundColor = 'red'

        }

    }, 500)

}




function criarBotoes() {

    fetch('/estacoes/totens-por-estacao', {
        method: 'GET',
    }).then((resposta) => {
        if (resposta.status == 200) {
            resposta.json().then((json) => {
                for (let index = 0; index < json.length; index++) {
                    lista_regioes.push(json[index].linha_estacao);
                    console.log(json[index].quantidade_totens);
                    quant_totens.push(json[index].quantidade_totens);
                    rand = (Math.random() * (lista_regioes.length - 1)).toFixed(0)
                    local = lista_regioes[rand]
                }

                var num_botoes = lista_regioes.length


                for (let i = 0; i < num_botoes; i++) {

                    var corpo_sibebar = document.getElementById('corpo_sidebarID')
                    var botao = document.createElement('button')
                    botao.setAttribute('id', `${i}`)
                    botao.setAttribute('class', 'botoes_sidebar')
                    botao.innerHTML = lista_regioes[i]
                    corpo_sibebar.appendChild(botao)

                    if (local == lista_regioes[i]) {
                        botao.style.backgroundColor = 'red'
                    }

                    botao.addEventListener('click', () => {

                        var nome_titulo = document.getElementById("nome_titulo")
                        nome_titulo.innerHTML = event.target.innerHTML

                        removeAlertas()
                        criarAlertas(quant_totens[i], lista_regioes[i])
                        ultimo_botao_clicado = event.target.innerHTML
                        id_graficos.style.display = 'flex'
                        gerarDados()
                        limparGrafico()
                        graficoPizza()
                        graficoBar()

                    })
                }
            })
        }
    })



}



function criarAlertas(num_alerta, regiao) {

    if (rand_alert == 0) {

        rand_alert = (Math.random() * (quant_totens[regiao_alerta] - 1) + 1).toFixed(0)

    }



    for (let i = 0; i < num_alerta; i++) {

        var alertas = document.getElementById("alertasID")
        var alerta = document.createElement('div')
        var txt = document.createElement('p')
        alerta.setAttribute('class', 'alerta')
        alerta.setAttribute('style', 'background-color: #2e861')
        alerta.setAttribute('id', `${regiao}`)

        txt.innerHTML = `${i + 1}`
        alerta.appendChild(txt)
        alertas.appendChild(alerta)

        alerta.addEventListener('click', () => {
            alerta_atual.innerHTML = event.target.innerHTML
            if (nome_titulo.innerHTML == lista_regioes[regiao_alerta] && rand_alert == alerta_atual.innerHTML) {
                alerta_atual.style.backgroundColor = 'red'
            } else {
                alerta_atual.style.backgroundColor = '#2e8617'
            }

            pag1.style.display = 'none';
            pag2.style.display = 'flex';



            //console.log(rand_alert)
            //console.log(lista_regioes[regiao_alerta])




        })

    }



    var getIdAlerta = document.getElementById(`${regiao}`)
    if (lista_regioes[regiao_alerta] == getIdAlerta.id) {

        var class_alertas = document.getElementsByClassName('alerta')



        class_alertas[rand_alert - 1].style.backgroundColor = 'red'
        //getIdAlerta.style.backgroundColor = 'red'

        if (alerta_piscando == false) {
            alerta_piscando = true
            setInterval(() => {

                if (class_alertas[rand_alert - 1].style.backgroundColor == 'red') {
                    class_alertas[rand_alert - 1].style.backgroundColor = 'black'
                } else if (class_alertas[rand_alert - 1].style.backgroundColor == 'black') {
                    class_alertas[rand_alert - 1].style.backgroundColor = 'red'

                }

            }, 500)




        }

    }




}

function removeAlertas() {

    var pai = document.getElementById("alertasID")
    var existe = !!document.getElementsByClassName("alerta")


    if (existe) {

        var filhos = pai.childNodes;

        for (let i = filhos.length - 1; i >= 0; i--) {


            filhos[i].remove()


        }

    }



    //

}
function voltarDash() {

    pag1.style.display = 'flex';
    pag2.style.display = 'none';
}

// -------------------------------------------------------

var myChart1;
var myChart2;
var dado1;
var dado2;
var dado3;
var dado4;
var dado5;
var dado6;
var dado7;
var dado8;
var quant_totens_local = [];
var valores_aleatorios = [];


main()

function gerarDados() {

    dado1 = (Math.random() * 19 + 1).toFixed(0)
    dado2 = (Math.random() * 29 + 1).toFixed(0)
    dado3 = (Math.random() * 39 + 1).toFixed(0)
    dado4 = (Math.random() * 49 + 1).toFixed(0)
    dado5 = (Math.random() * 59 + 1).toFixed(0)
    dado6 = (Math.random() * 69 + 1).toFixed(0)
    dado7 = (Math.random() * 59 + 1).toFixed(0)
    dado8 = (Math.random() * 49 + 1).toFixed(0)

    valores_aleatorios = [dado1, dado2, dado3, dado4, dado5, dado6, dado7, dado8]

    var nome_estacao = event.target.innerHTML
    var numero_estacao = lista_regioes.indexOf(nome_estacao)
    quant_totens_local = []
    for (let i = 1; i <= quant_totens[numero_estacao]; i++) {
        quant_totens_local.push(i)

    }
    console.log(quant_totens_local)


}


function limparGrafico() { //Para criar um gráfico novo é preciso destruir o anterior
    if (myChart1 != undefined) {
        myChart1.destroy();
    }

    if (myChart2 != undefined) {
        myChart2.destroy();
    }

}


function graficoPizza() {// Cria o gráfico de pizza
    var totalWin = 0
    var totalUbu = 0

    fetch('/estacoes/dashboard', {
        method: 'GET',
    }).then((resposta) => {
        resposta.json().then((json) => {
            for (let index = 0; index < json.length; index++) {

                if (json[index].sistema_operacional == "Windows") {
                    totalWin++
                }

                if (json[index].sistema_operacional == "Ubuntu") {
                    totalUbu++
                }
            }
            const ctx = document.getElementById('myChart1').getContext('2d');
            myChart1 = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: ['Windows', 'Ubuntu'],
                    datasets: [{
                        label: 'Sistemas Operaiconais',
                        data: [totalWin, totalUbu],
                        backgroundColor: [
                            'red',
                            'green',
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        x: { grid: { tickColor: 'blue' }, ticks: { color: 'grey', fontSize: 5 } }
                    },
                    plugins: {
                        legend: { labels: { font: { size: 16, weight: 'bolder' }, color: 'white' } },
                        labels: { size: 15 },
                        title: { color: 'black' }
                    }
                }
            });
        })
    })



}

function graficoBar() {// Cria o gráfico de barra

    var linhas = []
    var quantidadeTotens = []

    fetch('/estacoes/totens-por-estacao', {
        method: 'GET',
    }).then(function (resposta) {
        resposta.json().then((json) => {
            for (let index = 0; index < json.length; index++) {
                linhas.push(json[index].linha_estacao)
                quantidadeTotens.push(json[index].quantidade_totens)
            }

            const ctx = document.getElementById('myChart2').getContext('2d');
            myChart2 = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: linhas,
                    datasets: [{
                        label: 'Totens por estação',
                        data: quantidadeTotens,
                        backgroundColor: [
                            'gold'
                        ],
                        borderColor: [
                            'gold'
                        ],
                        borderWidth: 3
                    }]
                },
                options: {
                    responsive: true,

                    scales: {
                        x: { grid: { tickColor: 'blue' }, ticks: { color: 'grey', fontSize: 5 } }
                    },

                    plugins: {

                        legend: { labels: { font: { size: 16, weight: 'bolder' }, color: 'white' } },
                        labels: { size: 15 },
                        title: { color: 'black' }

                    }
                }
            });
        });
    });
}

function irMapa() {

    window.location = 'mapa.html'

}
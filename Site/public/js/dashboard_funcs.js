var lista_regioes = []
var quant_totens = []

var rand = (Math.random() * (lista_regioes.length - 1)).toFixed(0)
var local = lista_regioes[rand]
var rand_alert = 0;
var regiao_alerta;
var alerta_piscando = false;

var chartPieMem;
var chartPieVol;
var chartPieServicos;
var chartPieProcessos;

var tempoGRAPH = 10000;

function main() {

    criarBotoes()

    //setTimeout(() => {
    //    verCorBotao();
    //}, 500)

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

    //setInterval(() => {

        //if (botao_red.style.backgroundColor == 'red') {
        //   botao_red.style.backgroundColor = 'black'
        //} else if (botao_red.style.backgroundColor == 'black') {
        //    botao_red.style.backgroundColor = 'red'

        //}

    //}, 500)

}

function criarBotoes() {
    fetch(`/estacoes/estacoes-por-empresa/${sessionStorage.ID_EMPRESA}`, {
        method: 'GET',
    }).then((resposta) => {
        if (resposta.status == 200) {
            resposta.json().then((json) => {
                for (let index = 0; index < json.length; index++) {
                    lista_regioes.push(json[index].nome_estacao);
                    quant_totens.push(json[index].quantidade_totens);
                    rand = (Math.random() * (lista_regioes.length - 1)).toFixed(0)
                    local = lista_regioes[rand]
                }

                var num_botoes = lista_regioes.length


                for (let i = 0; i < num_botoes; i++) {

                    var corpo_sibebar = document.getElementById('corpo_sidebarID')
                    var botao = document.createElement('button')
                    botao.setAttribute('id', `estacao_${json[i].id_estacao}`)
                    botao.setAttribute('class', 'botoes_sidebar')
                    botao.innerHTML = lista_regioes[i]
                    corpo_sibebar.appendChild(botao)

                    if (local == lista_regioes[i]) {
                        botao.style.backgroundColor = 'red'
                    }
                    botao.onclick = (teste) => {
                        criarBotaoToten(teste.target.innerHTML)
                        console.log("teste", teste.target.id.split("_").at(-1))
                        sessionStorage.ID_ESTACAO = teste.target.id.split("_").at(-1)
                        var nome_titulo = document.getElementById("nome_titulo")
                        nome_titulo.innerHTML = event.target.innerHTML

                        ultimo_botao_clicado = event.target.innerHTML
                       // id_graficos.style.display = 'flex'
                        
                        limparGrafico()
                    }
                }
            });
        }
    });
}

function criarBotaoToten(nome_estacao) {
    removeAlertas()
    fetch("/estacoes/totens-por-estacao", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idEmpresa: sessionStorage.ID_EMPRESA,
            estacaoNome: nome_estacao
        })
    }).then((resposta) => {
        if (resposta.status == 200) {
            resposta.json().then((json) => {
                criarAlertas(json)
            })
        }
    })
}

function criarAlertas(totens) {
    removeAlertas()

    if (rand_alert == 0) {
        rand_alert = (Math.random() * (quant_totens[regiao_alerta] - 1) + 1).toFixed(0)
    }

    for (let i = 0; i < totens.length; i++) {
        var regiao = totens[i].nome_estacao
        var alertas = document.getElementById("alertasID")
        var alerta = document.createElement('div')
        alerta.setAttribute('class', 'alerta')
        alerta.setAttribute('style', 'color: white; font-size: 20px')
        alerta.setAttribute('id', `${regiao}`)
        alerta.onclick = () => {
            sessionStorage.HOSTNAME = totens[i].hostname
            setInterval(() => {
                limparGrafico()
                carregarDadosToten(sessionStorage.HOSTNAME);
            },tempoGRAPH)
            
        }

        alerta.innerHTML = `${totens[i].hostname}`
        alertas.appendChild(alerta)

        alerta.addEventListener('click', () => {
            alerta_atual.innerHTML = event.target.innerHTML
            if (nome_titulo.innerHTML == lista_regioes[regiao_alerta] && rand_alert == alerta_atual.innerHTML) {
                alerta_atual.style.backgroundColor = 'red'
            } else {
                alerta_atual.style.backgroundColor = '#2e8617'
            }

            pag1.style.display = 'none'
            pag2.style.display = 'flex';

        });
    }



    var getIdAlerta = document.getElementById(`${regiao}`)
    if (lista_regioes[regiao_alerta] == getIdAlerta.id) {

        var class_alertas = document.getElementsByClassName('alerta')

        class_alertas[rand_alert - 1].style.backgroundColor = 'red'

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

function carregarDadosToten(_hostname) {
    fetch("/estacoes/dados-totens", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            hostname: _hostname
        })
    }).then((resposta) => {
        if (resposta.status == 200) {
            resposta.json().then((json) => {
                console.log(json);
                criarChartMem(json.memoria[0])
                criarChartVol(json.volume[0])
                criarChartServicos(json.servicos[0])
                criarChartProcessos(json.processos)
                updateGrafico()
            })
        }
    })
}

function limparGrafico(){ //Para criar um gráfico novo é preciso destruir o anterior
    if(chartPieMem != undefined){
        chartPieMem.destroy();
    }

    if(chartPieVol != undefined){
        chartPieVol.destroy();
    }

    if(chartPieServicos != undefined){
        chartPieServicos.destroy();
    }

    if(chartPieProcessos != undefined){
        chartPieProcessos.destroy();
    }
}

function updateGrafico(){

    if(chartPieMem != undefined){
        chartPieMem.update();
    }

    if(chartPieVol != undefined){
        chartPieVol.update();
    }

    if(chartPieServicos != undefined){
        chartPieServicos.update();
    }

    if(chartPieProcessos != undefined){
        chartPieProcessos.update();
    }
}

function criarChartMem(respostaJson) {
    console.log(respostaJson);

    span_memoria_total.innerHTML = `Memoria Total: ${respostaJson.memoria_uso + respostaJson.memoria_disponivel}`;
    span_memoria_uso.innerHTML = `Memoria em uso: ${respostaJson.memoria_uso}` ;
    span_memoria_disponivel.innerHTML = `Memoria disponivel: ${respostaJson.memoria_disponivel}` ;

    const canvasMem = document.getElementById('chartMem').getContext('2d');
    chartPieMem = new Chart(canvasMem, {
        type: 'doughnut',
        data: {
            labels: ['em uso','livre'],
            datasets: [{
                label: '# lbl',
                data: [respostaJson.memoria_uso, respostaJson.memoria_disponivel],
                backgroundColor: [
                    'rgba(255, 0, 0)',
                    'rgb(58, 185, 4)'
                ],
                borderColor: [
                    'rgba(39, 60, 92,1)',
                    'rgba(39, 60, 92, 1)'
                ],
                borderWidth: 1 ,
                cutout: '70%'
            }],
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        }
    })

}

function criarChartVol(respostaJson) {
    console.log(respostaJson);

    span_vol_total.innerHTML = `Volume total: ${respostaJson.volume_em_uso + respostaJson.volume_disponivel}`;
    span_disponivel_total.innerHTML = `Volume disponivel: ${respostaJson.volume_em_uso}`;
    span_uso_total.innerHTML = `Volume em uso: ${respostaJson.volume_disponivel}`;

    const canvasCpu = document.getElementById('chartCpu').getContext('2d');
    chartPieVol = new Chart(canvasCpu, {
        type: 'doughnut',
        data: {
            labels: ['em uso','livre'],
            datasets: [{
                label: '# lbl',
                data: [respostaJson.volume_em_uso, respostaJson.volume_disponivel],
                backgroundColor: [
                    'rgba(255, 0, 0)',
                    'rgb(58, 185, 4)'
                ],
                borderColor: [
                    'rgba(39, 60, 92,1)',
                    'rgba(39, 60, 92, 1)'
                ],
                borderWidth: 1 ,
                cutout: '70%'
            }],
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        }
    })
    chartPieVol.update();
}

function criarChartServicos(respostaJson) {
    console.log(respostaJson);

    span_servicos_total.innerHTML = `Total de serviços: ${respostaJson.total_servicos_ativos + respostaJson.total_servicos_inativos}`;
    span_servicos_ativo.innerHTML = `Total de serviços ativos: ${respostaJson.total_servicos_ativos}` ;
    span_servicos_inativo.innerHTML = `Total de serviços inativos: ${respostaJson.total_servicos_inativos}` ;

    const canvaServico = document.getElementById('chartServicos').getContext('2d');
    chartPieServicos = new Chart(canvaServico, {
        type: 'doughnut',
        data: {
            labels: ['ativo','inativo'],
            datasets: [{
                label: '# lbl',
                data: [respostaJson.total_servicos_ativos, respostaJson.total_servicos_inativos],
                backgroundColor: [
                    'rgb(58, 185, 4)',
                    'rgba(255, 0, 0)'
                ],
                borderColor: [
                    'rgba(39, 60, 92,1)',
                    'rgba(39, 60, 92, 1)'
                ],
                borderWidth: 1 ,
                cutout: '70%'
            }],
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        }
    })

    chartPieServicos.update();
}

function criarChartProcessos(respostaJson) {
    let processos = [];
    let data = [];
    for (let i = 0; i < respostaJson.length; i++) {
        processos.push(respostaJson[i].total_processos);
        data.push(respostaJson[i].data_atual.split(" ")[1]);        
    }

    span_ultimo_proc.innerHTML = `Total de processos ${processos[processos.length-1]} às ${data[data.length-1]}`;

    const canvaServico = document.getElementById('chartProcessos').getContext('2d');
    chartPieProcessos = new Chart(canvaServico, {
        type: 'line',
        data: {
            labels: data,
            datasets: [{
                label: 'Processos',
                data: processos,
                fill: false,
                borderColor: 'rgba(166, 15, 15)',
                tension: 0.1
            }],
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        }
    })
    chartPieProcessos.update();
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
}

function voltarDash() {
    limparGrafico()
    window.location = "./dashboard.html"
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





function aparecerModal(){

    modal.style.display = "flex"

}

function modalTotem(){

    modal2.style.display = "flex"

}

function aparecerMenu(){

    
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  window.onclick = function(event) {
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
  }
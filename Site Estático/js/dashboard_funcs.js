var lista_regioes = ['Tucuruvi','Jabaquara','Trianon-MASP','Liberdade','Luz','Brigadeiro','Paulista','Consolação']
var quant_totens = [6,5,3,4,8,4,3,5]

var rand = (Math.random() * (lista_regioes.length-1)).toFixed(0) 
var local = lista_regioes[rand]
var rand_alert = 0;
var regiao_alerta;
var alerta_piscando = false;



function main(){

    
    criarBotoes()
    verCorBotao()
    

}


function verCorBotao(){

    var botao = document.getElementsByClassName('botoes_sidebar')
    var botao_red;
    
    for(let i = 0; i < botao.length; i++){
        if(botao[i].style.backgroundColor == 'red'){
            botao_red = botao[i]
            regiao_alerta = botao_red.id
        }
    }
  
    setInterval(()=>{
                
        if(botao_red.style.backgroundColor == 'red'){ 
            botao_red.style.backgroundColor = 'black'
        }else if(botao_red.style.backgroundColor == 'black'){
            botao_red.style.backgroundColor = 'red'
            
        }

    },500)

}

    



function criarBotoes(){

    var num_botoes = lista_regioes.length


    for(let i = 0; i < num_botoes; i++){

        var corpo_sibebar = document.getElementById('corpo_sidebarID')
        var botao = document.createElement('button')
        botao.setAttribute('id',`${i}`)
        botao.setAttribute('class','botoes_sidebar')
        botao.innerHTML = lista_regioes[i]
        corpo_sibebar.appendChild(botao)

         

        if(local == lista_regioes[i]){

            botao.style.backgroundColor = 'red'

        } 

        botao.addEventListener('click',()=>{

            var nome_titulo = document.getElementById("nome_titulo")
            nome_titulo.innerHTML = event.target.innerHTML
            
            removeAlertas()
            criarAlertas(quant_totens[i],lista_regioes[i])
            ultimo_botao_clicado = event.target.innerHTML
            id_graficos.style.display = 'flex'
            gerarDados()
            limparGrafico()
            graficoPizza()
            graficoBar()
            
        })


    }

}



function criarAlertas(num_alerta, regiao){

    if(rand_alert == 0){

        rand_alert = (Math.random() * (quant_totens[regiao_alerta]-1)+1).toFixed(0)
        
    }


    
    for(let i = 0; i < num_alerta; i++){

        var alertas = document.getElementById("alertasID")
        var alerta = document.createElement('div')
        var txt = document.createElement('p')
        alerta.setAttribute('class','alerta')
        alerta.setAttribute('style','background-color: #2e861')
        alerta.setAttribute('id',`${regiao}`)
        
        txt.innerHTML = `${i+1}`
        alerta.appendChild(txt)
        alertas.appendChild(alerta)

        alerta.addEventListener('click',()=>{
            alerta_atual.innerHTML = event.target.innerHTML
            if(nome_titulo.innerHTML == lista_regioes[regiao_alerta] && rand_alert == alerta_atual.innerHTML){
                alerta_atual.style.backgroundColor = 'red'
            } else {
                alerta_atual.style.backgroundColor = '#2e8617'
            }

            pag1.style.display = 'none';
            pag2.style.display = 'flex';
            
            
            
            console.log(rand_alert)
            //console.log(lista_regioes[regiao_alerta])




        })

    }

    

    var getIdAlerta = document.getElementById(`${regiao}`)
    if(lista_regioes[regiao_alerta] == getIdAlerta.id){

        var class_alertas = document.getElementsByClassName('alerta')

        

        class_alertas[rand_alert-1].style.backgroundColor = 'red'
        //getIdAlerta.style.backgroundColor = 'red'

        if(alerta_piscando == false){
            alerta_piscando = true
            setInterval(()=>{
                
                if(class_alertas[rand_alert-1].style.backgroundColor == 'red'){ 
                    class_alertas[rand_alert-1].style.backgroundColor = 'black'
                }else if(class_alertas[rand_alert-1].style.backgroundColor == 'black'){
                    class_alertas[rand_alert-1].style.backgroundColor = 'red'
                    
                }
        
            },500)
    
    
            
    
        }

    }
        



}

function removeAlertas(){

    var pai = document.getElementById("alertasID")
    var existe = !!document.getElementsByClassName("alerta")
    

    if(existe){
        
        var filhos = pai.childNodes;
        
        for(let i = filhos.length-1; i >= 0; i--){

            
            filhos[i].remove()

            
        }
        
    } 



    //

}
function voltarDash(){

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


main()

function gerarDados(){

    dado1 = (Math.random() * 19 +1).toFixed(0) 
    dado2 = (Math.random() * 29 +1).toFixed(0) 
    dado3 = (Math.random() * 39 +1).toFixed(0) 
    dado4 = (Math.random() * 49 +1).toFixed(0) 
    dado5 = (Math.random() * 59 +1).toFixed(0) 
    dado6 = (Math.random() * 69 +1).toFixed(0) 
    


}


function limparGrafico(){ //Para criar um gráfico novo é preciso destruir o anterior
    if(myChart1 != undefined){
        myChart1.destroy();
    }

    if(myChart2 != undefined){
        myChart2.destroy();
    }

}


function graficoPizza(){// Cria o gráfico de pizza

  
const ctx = document.getElementById('myChart1').getContext('2d');
myChart1 = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Crítico', 'Em Funcionamento', 'Atenção'],
        datasets: [{
            label: 'Alertas por Mês',
            data: [dado2, dado6, dado3],
            backgroundColor: [
                'red',
                'green',
                'gold',
                'green',
                'purple'
                
            ],
            borderColor: [
                
            ],
            borderWidth: 3
        }]
    },
    options: {
        responsive: true,

        scales: {
            x:{grid:{tickColor:'blue'}, ticks:{color:'grey',fontSize:5}},
            y:{}
        },

        plugins:{

            legend:{labels:{font:{size: 16,weight:'bolder'},color:'white'}},
            labels:{size: 15},
	    title:{color:'black'}

        }
    }
});

}

function graficoBar(){// Cria o gráfico de barra


const ctx = document.getElementById('myChart2').getContext('2d');
myChart2 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Consolação', 'Brigadeiro', 'Trianon'],
        datasets: [{
            //label: '',
            data: [dado1, dado4, dado5],
            backgroundColor: [
                'red',
                'blue',
                'gold',
                'green',
                'purple'
                
            ],
            borderColor: [
                'red',
                'blue',
                'gold',
                'green',
                'purple'
                
            ],
            borderWidth: 3
        }]
    },
    options: {
        responsive: true,

        scales: {
            x:{grid:{tickColor:'blue'}, ticks:{color:'grey',fontSize:5}},
            y:{}
        },

        plugins:{

            legend:{labels:{font:{size: 16,weight:'bolder'},color:'white'}},
            labels:{size: 15},
        title:{color:'black'}

        }
    }
});

}
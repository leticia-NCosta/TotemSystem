var lista_regioes = ['Tucuruvi','Jabaquara','Trianon-MASP','Barra Funda','Luz','Brigadeiro','Paulista','Consolação']
var quant_totens = [2,3,4,1,4,3,2,3]


function main(){

    criarBotoes()

}



function criarBotoes(){

    var num_botoes = lista_regioes.length


    for(let i = 0; i < num_botoes; i++){

        var corpo_sibebar = document.getElementById('corpo_sidebarID')
        var botao = document.createElement('button')
        botao.setAttribute('id',`botao${i}`)
        botao.innerHTML = lista_regioes[i]
        corpo_sibebar.appendChild(botao)

        botao.addEventListener('click',()=>{

            var nome_titulo = document.getElementById("nome_titulo")
            nome_titulo.innerHTML = event.target.innerHTML
            
            removeAlertas()
            criarAlertas(quant_totens[i],lista_regioes[i])
            
        })


    }

}



function criarAlertas(num_alerta, regiao){

    for(let i = 0; i < num_alerta; i++){

        var alertas = document.getElementById("alertasID")
        var alerta = document.createElement('div')
        var txt = document.createElement('p')
        alerta.setAttribute('class','alerta')
        alerta.setAttribute('id',`alerta${regiao}${i}`)
        txt.innerHTML = `#${i+1}`
        alerta.appendChild(txt)
        alertas.appendChild(alerta)

    }

}

function removeAlertas(){

    var pai = document.getElementById("alertasID")
    var existe = !!document.getElementsByClassName("alerta")
    

    if(existe){
        
        var filhos = pai.childNodes;
        console.log(filhos)
        for(let i = filhos.length-1; i >= 0; i--){

            
            filhos[i].remove()

            
        }
        
    } 



    //

}


main()
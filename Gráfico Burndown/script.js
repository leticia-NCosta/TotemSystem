// Sempre que add novo entregavel no trello, add na variavel x
// o valor deste entregavel em fibonnaci

var x = 100;
var datas = ["16/03","17/03","18/03","19/03","20/03","21/03","22/03","23/03","24/03","25/03","26/03",
"27/03","28/03","29/03","30/03","31/03","01/04","02/04","03/04","04/04","05/04","06/04",
"07/04","08/04","09/04","10/04","11/04"]
var calculo_meta = []

calcularMeta()

var ctx = document.getElementById('chart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: datas,
        datasets: [{
            label: 'Meta da Sprint',
            data: 
                calculo_meta
            ,
            backgroundColor: [
                'red'
            ],
            borderColor: [
                'red'
            ],
            borderWidth: 3
        },{
            label: 'Desempenho Totem System',
            data: [
                x, // 16/03
            ],
            backgroundColor: [
                'blue'
            ],
            borderColor: [
                'blue'
            ],
            borderWidth: 3  
        }],
        
    },
    options: {
        responsive: true,

        scales: {
            x:{grid:{tickColor:'blue'}, ticks:{color:'blue',fontSize:20}},
            y:{}
        },

        plugins:{

            legend:{labels:{font:{size: 14,weight:'bolder'}}},
            labels:{size: 15}

        }
    }
});

function calcularMeta(){

    var tamanho_label = datas.length;
    var num_meta = x / tamanho_label;
    var valor_temp = x;

    

    for(let i = 0; i < tamanho_label; i++){

        calculo_meta.push(valor_temp)
        valor_temp -= num_meta

    }
    console.log(calculo_meta)


}
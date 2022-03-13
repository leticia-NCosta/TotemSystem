graficoPizza()
graficoBar()

function graficoPizza(){// Cria o gráfico de pizza

  
const ctx = document.getElementById('myChart1').getContext('2d');
var myChart1 = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Consolação', 'Brigadeiro', 'Trianon'],
        datasets: [{
            //label: '',
            data: [20, 10, 40],
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

function graficoBar(){// Cria o gráfico de barra


const ctx = document.getElementById('myChart2').getContext('2d');
var myChart2 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Consolação', 'Brigadeiro', 'Trianon'],
        datasets: [{
            //label: '',
            data: [20, 10, 40],
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
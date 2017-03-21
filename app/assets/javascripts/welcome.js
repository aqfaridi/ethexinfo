function generate_chart(data){
$('#chart-table').empty();
var chart = $('#chart').highcharts({
    chart: {
        type: 'column'
    },
    credits: {
        enabled: false
    },
    legend: {
        symbolWidth: 0,
        symbolHeight: 0,
        enabled: true
    },
    title: {
        text: 'EthexIndia Trades Analytics'
    },
    subtitle: {
        text: 'Trades'
    },
    xAxis: {
        type: 'category',
        title: {
            text: 'TimeStamp'
        }
    },
    yAxis: {
        title: {
            text: 'ETH @ Price'
        }
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: ''
            },
            animation: {
                duration: 1000
            }
        },
        column: {
            pointPadding: 0.2,
            size: '95%',
            borderWidth: 0,
            events: {
                legendItemClick: function () {
                    return false; 
                }
            }
        },
        allowPointSelect: false,
    },

    tooltip: {
        headerFormat: '',
        pointFormat: ''
    },

    series: [{
        name: 'o: Overall Conversion <br> s: Step-Wise Conversion',
        colorByPoint: true,
        data: []
    }],
  
});
}
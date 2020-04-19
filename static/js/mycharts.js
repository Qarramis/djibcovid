$(function () {

    // Get context with jQuery - using jQuery's .get() method.
    var areaChartCanvas = $('#areaChart1').get(0).getContext('2d')

      var areaChartData = {
          labels  : ['mars 23', 'mars 25', 'mars 27', 'mars 28', 'mars 29', 'mars 30', 'mars 31', 'avril 1', 'avril 2', 'avril 3', 'avril 4', 'avril 5', 'avril 6', 'Avril 7', 'avril 8', 'avril 10', 'avril 11', 'avril 12', 'avril 13', 'avril 14', 'avril 15', 'avril 16', 'avril 17'],
          datasets: [
            {
              label               : 'Cas Confirmes',
              backgroundColor     : 'rgba(60,141,188,0.9)',
              borderColor         : 'rgba(60,141,188,0.8)',
              pointRadius         : false,
              pointColor          : '#3b8bba',
              pointStrokeColor    : 'rgba(60,141,188,1)',
              pointHighlightFill  : '#fff',
              pointHighlightStroke: 'rgba(60,141,188,1)',
              data                : [2, 9, 1, 2, 4, 7, 5, 3, 7, 9, 1, 9, 31, 31, 14, 10, 37, 28, 83, 65, 72, 156, 141]
            },
            {
              label               : 'Lab Test',
              backgroundColor     : 'rgba(210, 214, 222, 1)',
              borderColor         : 'rgba(210, 214, 222, 1)',
              pointRadius         : false,
              pointColor          : 'rgba(210, 214, 222, 1)',
              pointStrokeColor    : '#c1c7d1',
              pointHighlightFill  : '#fff',
              pointHighlightStroke: 'rgba(220,220,220,1)',
              data                : []
            },
          ]
        }
    
        var areaChartOptions = {
          maintainAspectRatio : false,
          responsive : true,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              gridLines : {
                display : true,
              }
            }],
            yAxes: [{
              gridLines : {
                display : true,
              }
            }]
          }
        }
    
        // This will get the first returned node in the jQuery collection.
        var areaChart       = new Chart(areaChartCanvas, { 
          type: 'line',
          data: areaChartData, 
          options: areaChartOptions
        })

  })
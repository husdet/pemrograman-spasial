var data2015 = {
    x: ['Banyumanik', 'Gunungpati', 'Mijen', 'Tembalang'],
    y: [16, 28, 20, 25],
    name: 'Tahun 2015',
    type: 'bar',
    marker: {
      color: 'rgb(83, 226, 54)'
    }
  };

var data2016 = {
    x: ['Banyumanik', 'Gunungpati', 'Mijen', 'Tembalang'],
    y: [10, 23, 7, 20],
    name: 'Tahun 2016',
    type: 'bar',
    marker: {
      color: 'rgb(255, 174, 0)'
    }
  };

var data2017 = {
    x: ['Banyumanik', 'Gunungpati', 'Mijen', 'Tembalang'],
    y: [21, 17, 14, 26],
    name: 'Tahun 2017',
    type: 'bar',
    marker: {
      color: 'rgb(0, 45, 248)'
    }
  };

var data = [data2015, data2016, data2017];
var layout = {barmode: 'group'};
Plotly.newPlot('grafik-begal', data, layout);

/*  fungsi improvisasi yang sepertinya fail heheh
    function switchBar() {
    var cb15 = document.getElementById('cb15'); // default, sepertinya tidak perlu dipanggil
    var cb16 = document.getElementById('cb16');
    var cb17 = document.getElementById('cb17');
    
    //vanilla js, belum pakai Plotly.react

    if (cb16.checked) {
        data[0].y = [10,23,7,20]
      } else if (cb17.checked) {
        data[0].y = [21,17,14,26]
      }
    } */


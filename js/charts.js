/* Author and copyright notice
 @version    2.0.2
 @package    XpertVal64 Interface
 @author     Vivian Vanatu <vivian.vanatu@lives-international.com>
 @copyright  2022 Medisol SRL
 @license    This copy is for demo purposes only. Do not copy, change or use the code with other purpose than demostrating XpertVal64 usage
*/
(function($) {

	'use strict';

	/*
	Flot: Real-Time
	*/
	let data = [],
		totalPoints = 300,
		temperature = localStorage.getItem("storageTemp"),
		tmax = localStorage.getItem("storageTmax"),
		tmin = localStorage.getItem("storageTmin"),
		humidity = localStorage.getItem("storageHumid"),
		hmax = localStorage.getItem("storageHmax"),
		hmin = localStorage.getItem("storageHmin");		
		
	function getRandomData(temperature, tmax, tmin) {
		if( $('#flotRealTime').get(0) ) {
			if (data.length > 0)
				data = data.slice(1);
			
			// Do a random walk
			while (data.length < totalPoints) {

				var prev = data.length > 0 ? data[data.length - 1] : 50,
					y = Math.random() * (parseFloat(tmax) - parseFloat(tmin)) + parseFloat(tmin);
				if (y < 0) {
					y = 0;
				} else if (y > 100) {
					y = 100;
				}

				data.push(y);
				console.log(prev + " " + y);
				//document.getElementById("temperature").innerHTML = "Temperature:  <span class=\"update\">" + y.toFixed(2) + "</span>";
				//console.log( " avrg: " + avrg );
			}

			// Zip the generated y values with the x values
			var res = [];
			for (var i = 0; i < data.length; ++i) {
				res.push([i, data[i]])
			}

			return res;
		}
	}
	

	if( $('#flotRealTime').get(0) ) {
		var plot = $.plot('#flotRealTime', [ getRandomData(temperature, tmax, tmin) ], 
											 {
			colors: ['#8CC9E8'],
			series: {
				lines: {
					show: true,
					fill: false,
					lineWidth: 1,
					fillColor: {
						colors: [{
							opacity: 0.45
						}, {
							opacity: 0.45
						}]
					}
				},
				points: {
					show: false
				},
				shadowSize: 0
			},
			grid: {
				borderColor: 'rgba(0,0,0,0.1)',
				borderWidth: 1,
				labelMargin: 15,
				backgroundColor: 'transparent'
			},
			yaxis: {
				min: hmin / 1.2,
				max: hmax * 1.2,
				color: 'rgba(0,0,0,0.1)'
			},
			xaxis: {
				show: false
			}
		});
	}

	function update() {
		if( $('#flotRealTime').get(0) ) {
			
			plot.setData([getRandomData(humidity, hmax, hmin)]);
			
			plot.draw();
			
			setTimeout(update, $( 'html' ).hasClass( 'mobile-device' ) ? 1000 : 3000 );
		}
	}
	update();

}).apply(this, [jQuery]);
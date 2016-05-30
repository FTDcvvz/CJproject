/**
 *
 */
function draw_pie (data,title,subtitle,divArea){
	Highcharts.setOptions({
		global:{
		}
	});
	
	var highchartsOption = {
			chart: {
				renderTo:divArea,
	            type: 'pie',
	            options3d: {
	                enabled: true,
	                alpha: 45,
	                beta: 0
	            }
	        },
			colors: ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9', 
			         '#f15c80', '#e4d354', '#8085e8', '#8d4653', '#91e8e1'],
			exporting: {
				enabled:false
			},
			credits:{
				enabled:false
			},
			title:{
				text:title
			},
			subtitle:{
				text:subtitle
			},
	        tooltip: {
	            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
	        },
	        plotOptions: {
	            pie: {
	                allowPointSelect: true,
	                cursor: 'pointer',
	                depth: 35,
	                dataLabels: {
	                    enabled: true,
	                    format: '{point.name}'
	                }
	            }
	        },
	        series:[{
	        	type:'pie',
	        	data:data
	        }]
	};
	chart= new Highcharts.Chart(highchartsOption);
}
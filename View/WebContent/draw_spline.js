/**
 * 
 */
var chart;
function draw_spline (data,resName,subtitle,divArea){
	//设置图属性
	var highchartsOption = {
		chart:{
			renderTo:divArea,
			type:'spline',
			zoomType: 'x',
            panning: true,
            panKey: 'shift'
				
		},
		title:{
			text:resName   
		},
		subtitle:{
			text:subtitle
		},
		xAxis:{
			title:{
				text:'时间'
			},
			type: 'datetime',
		},
		yAxis:{
			title:{
				text:'流量'
			},
		},
		legend: {
            align: 'right',
            verticalAlign: 'bottom',
            y: 10,
            floating: true,
            borderWidth:0
        },
		tooltip:{
			headerFormat: '<b>{series.name}</b><br />',
			pointFormat: '{point.x:%e. %b}: {point.y}',
			shared:false,
			crosshairs:true
		},
		plotOptions:{
			spline: {
				lineWidth: 3,
				states: {
                    hover: {
                        lineWidth:4
                    }
                },
				marker: {
                    enabled: false
                },
			}
		},
		series:data
	};
	//绘图
	chart= new Highcharts.Chart(highchartsOption);

}
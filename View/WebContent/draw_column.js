/**
 *
 */
function draw_column (data,resName,subtitle,divArea,enable3d){
	Highcharts.setOptions({
		global:{
		}
	});
	
	var highchartsOption = {
			chart:{
				renderTo:divArea,
				type:'column',
				zoomType:'x',
				panning:true,
				panKey:'shift',
				options3d:{
					enabled:enable3d,
					alpha:15,
					beta:15,
					depth:50,
					viewDistance:25
				},
				events:{
			    	selection:function (event){
			    		if(event.xAxis){
			    			value_table(event.xAxis[0].min,event.xAxis[0].max,data,divArea+"vtb");
			    		}
			    		else
			    			value_table(this.xAxis[0].dataMin,this.xAxis[0].dataMax,data,divArea+"vtb");
			    	}
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
				text:resName
			},
			subtitle:{
				text:subtitle
			},
			xAxis:{
				title:{
					text:'时间'
				},
				type:'datetime',
				labels:{
				},
				startOnTick:true,
				endOnTick:true,
				minTickInterval:300000     //最小时段为5分钟，没有设置为一个小时3600000，因为一个小时看起来不方便
			},
			yAxis:{
				title:{
					text:'Y 轴'
				}
			},
			legend: {
				layout: 'vertical',
	            backgroundColor: 'white',
	            align: 'left',
	            verticalAlign: 'top',
	            y: 60,
	            x: 70,
	            borderWidth: 2,
	            borderRadius: 0,
	            title: {
	                text: '  '
	            },
	            floating: true,
	            draggable: true,
	            zIndex: 20
	        },
	        tooltip:{
	        	headerFormat: '<b>{series.name}</b><br />',
				pointFormat: '{point.x:%Y/%b/%e %H:%M:%S}: {point.y}',
				shared:false,
				crosshairs:true
	        },
	        plotOptions:{
	        	series:{
	        		dataLabels:{
	        			enabled:true,
	        			color:'#FFFFFF',
	        			style:{
	        				fontSize:'13px',
	        				fontFamily:'Verdana,sans-serif',
	        				textShadow:'0 0 3px black'
	        			}
	        		},
	        	},
	        	column:{
	        		pointPadding: 0.1,
		            borderWidth: 0
	        	}
	        },
	        series:data
			
	}
	chart= new Highcharts.Chart(highchartsOption);
}
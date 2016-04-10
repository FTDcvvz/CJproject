/**
 * 
 */
var chart;
function draw_spline (data,resName,subtitle,divArea,ytitle){
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
				text:ytitle
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
                point:{
                	events:{
                		//table的div的id比chart的div的id多"tb",而其中的table的id又多”table“，所以是divArea+"tbtable"
                		mouseOver: function(){
                			//将x轴的值变成Date形式
                			var d = new Date();
                			d.setTime(this.x);
                			var dstr = d.toDateString();
                			$("#"+divArea+"tbtable>tbody>tr").each(function(){
                				//如果查到一样，就把这一行背景色调成高亮，并且自动滚动到这一行
                				if(($(this).find("td").first()).text() == dstr ){
                					this.style.backgroundColor='#ffff66';
                					var objTr = $(this)[0];
                					$("#"+divArea+"tb").animate({scrollTop:objTr.offsetTop},0);
                				}
                				else this.style.backgroundColor='#ffffff';
                			});
                		},
                		mouseOut:function(){
                			$("#"+divArea+"tbtable>tbody>tr").each(function(){
                				this.style.backgroundColor='#ffffff';
                			});
                		}
                	}
                }
			}
		},
		series:data
	};
	//绘图
	chart= new Highcharts.Chart(highchartsOption);
}

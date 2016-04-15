/**
 * 
 */
var chart;

function draw_spline (data,resName,subtitle,divArea,ytitle){
	//时差调整
	Highcharts.setOptions({
		global:{
			timezoneOffset:-24*60	//一天
		},
		lang:{
			contextButtonTitle:'导出excel表格',
			resetZoom:' 重置缩放 ',
			resetZoomTitle:"重置缩放",
		},
		
	});
	
	//如果副标题是"水位信息图"那么type = 'areaspline'，否则就是'spline'
//	var chartType;
//	if(subtitle == "水位信息图") chartType = 'areaspline';
//	else chartType = 'spline';
	
	//设置图属性
	var highchartsOption = {
		chart:{
			renderTo:divArea,
			type:'spline',
			zoomType: 'x',
            panning: true,
            panKey: 'shift',
            events:{
            	selection:function (event){
            		if(event.xAxis){
            			if(event.xAxis[0].max - event.xAxis[0].min >= 7 * 24 * 3600000)
            				value_table(event.xAxis[0].min,event.xAxis[0].max,data,divArea+"vtb");
            		}
            		else
            			value_table(this.xAxis[0].dataMin,this.xAxis[0].dataMax,data,divArea+"vtb");
            	}
            }
		},
		exporting: {
			filename:'数据',
	        buttons: {
                contextButton: {
                	symbol: 'circle',
                    text: ' 导出excel ',
                    symbolSize:20,
                    onclick:function () { this.downloadXLS(); }
                }
            }
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
			type: 'datetime',
			minRange:7 * 24 * 3600000 //最小范围7天
		},
		yAxis:{
			title:{
				text:ytitle
			},
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
			pointFormat: '{point.x:%e. %b}: {point.y}',
			shared:false,
			crosshairs:true
		},
		plotOptions:{
			series: {
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

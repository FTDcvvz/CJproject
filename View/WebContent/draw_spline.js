/**
 * 
 */
function draw_spline (data,resName,subtitle,divArea,linewidth){
	Highcharts.setOptions({
		lang:{
			contextButtonTitle:'导出excel表格',
			resetZoom:' 重置缩放 ',
			resetZoomTitle:"重置缩放",
		},
	});
	
	//根据副标题是"水位信息图"还是“流量信息图”确定图的类型和y轴标题
	var chartType = 'spline';
	var ytitle = 'Y 轴';
	if(subtitle == "水位信息图") 
	{
			chartType = 'areaspline';
			ytitle = '水 位';
	}
	if(subtitle == "流量信息图") 
	{
			chartType = 'spline';
			ytitle = '流 量';
	}
	
	//设置图属性
	var highchartsOption = {
		chart:{
			renderTo:divArea,
			type:chartType,
			zoomType: 'x',
            panning: true,
            panKey: 'shift',
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
			labels:{
				rotation:30,
			}
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
			pointFormat: '{point.x:%Y/%b/%e %H:%M:%S}: {point.y}',
			shared:false,
			crosshairs:true
		},
		plotOptions:{
			series: {
				lineWidth: linewidth,
				states: {
                    hover: {
                        lineWidth:linewidth
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
                			d.setTime(this.x-timeoffset);
                			var dstr = d.toLocaleString();
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

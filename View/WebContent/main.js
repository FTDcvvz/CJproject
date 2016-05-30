/**
 * 
 */
var timeoffset = 28800000;   //中国时差
var chart;
var LINEWIDTH = 3;   //过程线的粗度,初始为3，由调节器调节

var selectedItems = [];//勾选了的水库的名字
var selectedtables = [];//勾选了的表
var selectedInfo = [];//勾选的水库的实时信息表

var max = [];
var min = [];
var avg = [];
var total = [];   //最大值、最小值、平均值、累计值

//水库实时信息表的变量，每一个数组中都有若干个数组[time,数据]//////
var inq = [];
var dcq = [];
var z = [];
var gq = [];
var dq = [];
var twz = [];
//传给chart和table的data格式
var rsstdata1 = [{    //流量数据表
	name:'入库流量',
	data:inq
},{
	name:'出库流量',
	data:dcq
},{
	name:'发电流量',
	data:gq
},{
	name:'弃水流量',
	data:dq
}];

var rsstdata2 =[{     //水位数据表
	name:'库水位',
	data:z
},{
	name:'库下水位',
	data:twz
}];

var dataforpie = [];         //提供给饼状图的数据
///////////////////////////////////////////////////////////////
function showValues(value) {
    $('#R0-value').html(value);
}

$(function(){
	$("#btn").click(getdata);
	
	/*柱状图的配置项*/
	//1.柱状图类型（type为立体or平面）
	$("input[name='type']").click(function(){
		var length = Highcharts.charts.length;
		for(var i=0;i<length;i++)
		{
			if(Highcharts.charts[i]!=null){
				//根据配置项决定是否3d
				var enable3d;
				if($("input[name='type']:checked").val()=="false")
					enable3d = false;
				else enable3d = true;
				//重新画图   这个地方用redraw()函数会有问题
				var data = Highcharts.charts[i].options.series;
				var title = Highcharts.charts[i].options.title.text;
				var subtitle = Highcharts.charts[i].options.subtitle.text;
				var divarea = Highcharts.charts[i].options.chart.renderTo;
				Highcharts.charts[i].destroy();
				draw_column(data,title,subtitle,divarea,enable3d);
			}
		}
	});
	
	/*过程线配置项*/
	//1.线粗细程度
	showValues(LINEWIDTH);
	$('#R0').on('change', function(){
		LINEWIDTH = this.value;
		showValues(LINEWIDTH);
		var length = Highcharts.charts.length;
		for(var i=0;i<length;i++)
		{
			if(Highcharts.charts[i]!=null){
				var data = Highcharts.charts[i].options.series;
				var title = Highcharts.charts[i].options.title.text;
				var subtitle = Highcharts.charts[i].options.subtitle.text;
				var divarea = Highcharts.charts[i].options.chart.renderTo;
				Highcharts.charts[i].destroy();
				draw_spline(data,title,subtitle,divarea,LINEWIDTH);
			}
		}
	 });
	 //2.线条颜色
	
});

function getdata() {
	//获得勾选的水库的名字
	selectedItems = [];
	$("input[name='rsnmlist']:checked").each(function(){ 
			var str = String($(this).val());
	        selectedItems.push(str);
    });
	//获得勾选的数据表
	selectedtables = [];
	$("input[name='tables']:checked").each(function(){ 
		var str = String($(this).val());
		selectedtables.push(str);
	});
	
	//循环前清除所有的div 和 释放所有的chart缓存
	for(var i=0;i<Highcharts.charts.length;i++)
	{
		if(Highcharts.charts[i]!=null)
			Highcharts.charts[i].destroy();
	}
	$("div").remove();
	
	for (var i=0;i<selectedtables.length;i++){
		//选择了水库实时信息表
		if('RS_RSST_R' == selectedtables[i]){
			//表级div
			var $div = $("<div id='RSSTdiv' style='border:solid'><h1>水库实时数据表</h1></div>");
			$("body").append($div);
			
			//ajax查询水库实时信息表
			$.ajax({
				url:"/View/json/selectcheckbox.action",
				// 数据发送方式
				type:"post",
				// 要传递的数据
				data:{selectedItems:JSON.stringify(selectedItems)},//以json数据形式传递
				 // 接受数据格式
				dataType:"json",
				// 回调函数，接受服务器端返回给客户端的值
				success:function callback(retData){
					selectedInfo = retData.selectedData;//一个装了很多子数组的大数组
					var tmp = [];	//暂存第i个水库的实时信息表
					var resname ;	//暂存水库名字
					for(var i=0;i<selectedInfo.length;i++){
						/**
						 * 获得返回的数据并封装好
						 */
						resname = selectedItems[i];
						tmp = selectedInfo[i];
						//如果这个水库在这个表中根本就没有数据
						if(tmp.length==0){
							var $subdiv = $("<div style='border:solid'>"+"此表中没有水库  '"+resname+"' 的数据。"+"</div>");
							$("#RSSTdiv").append($subdiv);
						}
						else{
							//使用数组前将其中的数据清除     Q:为什么用inq=[]这种方式清空数组不行！！？？
							inq.length = 0;
							dcq.length = 0;
							z.length = 0;
							gq.length = 0;
							dq.length = 0;
							twz.length = 0;
							
							for(var j=0;j<tmp.length;j++){
								//将时间字符串转换为highcharts能分析的UTCDate(1970 年 1 月 1 日至今的毫秒数)
								var str = tmp[j].time;
								//alert(str);
								var UTCdate = Date.parse(str);
								
								//alert(UTCdate);
								//存储水库i的数据
								var arr =[UTCdate,tmp[j].inQ];
								inq.push(arr);
								arr = [UTCdate,tmp[j].discQ];
								dcq.push(arr);
								arr = [UTCdate,tmp[j].z];
								z.push(arr);
								arr = [UTCdate,tmp[j].genDiscQ];
								gq.push(arr);
								arr = [UTCdate,tmp[j].gateDiscQ];
								dq.push(arr);
								arr = [UTCdate,tmp[j].downZ];
								twz.push(arr);
							}
								/**
								 * 根据所获取的数据绘图和表
								 */
							//RSST_spline(resname);				//一次画一个水库
							//main_column(resname,"RSSTdiv");
							
						}
					}
				}//回调函数执行完毕
			});//ajax结束
			main_pie("RSSTdiv"); 		//和画曲线图和柱状图不一样，饼状图是对水库的综合作图，
												//所以并不是一次画一个水库的图，而是一次画一个表的图
		}
		
		//选择了水库水位库容曲线表
		if('RS_RSZP_B' == selectedtables[i]){
			var $div = $("<div id='RSZPdiv' style='border:solid'><h1>水库水位库容曲线表</h1></div>");
			$("body").append($div);
		}
		
		//选择了水库调度图表
		if('RS_RSSCG_B' == selectedtables[i]){
			var $div = $("<div id='RSSCGdiv' style='border:solid'><h1>水库调度图表</h1></div>");
			$("body").append($div);
		}
	}
	
}




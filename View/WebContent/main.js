/**
 * 
 */
var selectedItems = [];//勾选了的水库的名字
var selectedtables = [];//勾选了的表
var selectedInfo = [];//勾选的水库的实时信息表

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

///////////////////////////////////////////////////////////////

$(document).ready(function(){
	$("#btn").click(getdata);
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
	
	//循环前清除所有的div
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
							for(var j=0;j<tmp.length;j++){
								//将时间字符串转换为highcharts能分析的UTCDate(1970 年 1 月 1 日至今的毫秒数)
								var str = tmp[j].time;
								var date = new Date(str);
								var UTCdate = date.getTime()
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
						}
						/**
						 * 根据所获取的数据绘图和表
						 */
						RSST_spline(resname);//一次一个水库
					//	main_column(resname);
					}
				}//回调函数执行完毕
			});//ajax结束
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




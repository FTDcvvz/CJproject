/**
 * 
 */
var selectedItems = [];//勾选了的水库的名字
var selectedInfo = [];//勾选的水库的实时信息表

String resname;
var time = [];
var inq = [];
var dcq = [];
var z = [];
var gq = [];
var dq = [];
var twz = [];

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
	
	//异步获取信息ajax
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
			//返回过来的形式也是以json数据格式传来：
			//var retData={selectedData:json序列化的list}
			
			selectedInfo = retData.selectedData;//一个装了很多子数组的大数组
			var tmp = [];
			for(var i=0;i<selectedInfo.length;i++){
				//获得一个水库的数据分别存储（全局变量）
				resname = selectedItems[i];
				tmp = selectedInfo[i];
				for(var j=0;j<tmp.length;j++){
					time.push(tmp[j].time);
					inq.push(tmp[j].inQ);
					dcq.push(tmp[j].discQ);
					z.push(tmp[j].Z);
					gq.push(tmp[j].genDiscQ);
					dq.push(tmp[j].gateDiscQ);
					twz.push(tmp[j].downZ);
				}
				//画出这个水库的图（画图为draw函数）
				draw_spline();
			}
				
		}
	});
}

function draw_spline (){
	$('#container').highcharts({
		chart:{
			type:'spline'
		},
		title:{
			text:resname
		},
		xAxis:{
			title:{
				text:'date'
			},
			categories:time
		},
		yAxis:{
			title:{
				text:'水位'
			},
		},
		
	});
}


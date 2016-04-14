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
//传给chart的table的data格式
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
	/**
	 *备注：div层次说明————
	 *$div:  最外层表级div    $subdiv:水库级div  
	 *$ldiv：水库div中的左边的div（流量图）   $rdiv：水库div中的右边的div（水位图）
	 *$lvalueDiv:左边的特征值表             $rvalueDiv：右边的特征值表
	 *$ltbdiv:左边的表div      $rtbdiv：右边的表div
	 */
	for (var i=0;i<selectedtables.length;i++){
		//选择了水库实时信息表
		if('RS_RSST_R' == selectedtables[i]){
			//表级div
			var $div = $("<div id='RSSTdiv' style='border:solid'><h1>水库实时信息表</h1></div>");
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
						 * 回调函数第一步，获得返回的数据并封装好
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
							
							/**
							 * 回掉函数第二步，为图形和表等动态建立div
							 */
							
							//为表中的水库动态建立一个$subdiv。加入到$div中
							var $subdiv = $("<div style='border:solid'></div>");
							$("#RSSTdiv").append($subdiv);
							
							//为左边流量图动态建立一个$ldiv，并在其中画图
							var $ldiv = $("<div id="+resname+"L"+" style='height: 500px; width: 600px'></div>");
							$subdiv.append($ldiv);
							draw_spline(rsstdata1,resname,"流量信息图",resname+"L","流量");
							//加入按钮
							var $lvbtn = $("<input type='button' value='隐藏特征值'></input>");
							$subdiv.append($lvbtn);
							//加入统计特征值的表格div并且在其中制表
							var $lValueDiv = $("<div id="+resname+"Lvtb"+" style='height:300px;width:600px;border:solid'></div>");
							$lvbtn.after($lValueDiv);
							//这里的chart变量是从draw_spline.js文件中传来的，里面定义了全局变量chart，每画一次图都会为chart赋值
							value_table(chart.xAxis[0].dataMin,chart.xAxis[0].dataMax,rsstdata1,resname+"Lvtb");
							$lvbtn.click(function (){
								if($(this).attr("value")=="显示特征值"){
									$(this).next().show();
									$(this).attr("value","隐藏特征值");
								}
								else {
									$(this).next().hide();
									$(this).attr("value","显示特征值");
								}
							});
							//加入按钮
							var $lbtn = $("<input type='button' value='隐藏表格'></input>");
							$subdiv.append($lbtn);
							//加入表格$ltbdiv，并在其中制表
							var $ltbdiv = $("<div id="+resname+"Ltb"+" style='height:300px;width:600px;border:solid;overflow-y:scroll'></div>");
							$lbtn.after($ltbdiv);
							spline_table(rsstdata1,resname+"Ltb",resname);
							//如果点击，在lbtn后面加一个左表格div：ltbdiv，注意，点击事件中
							//的变量值不是当前循环中的值，而是点击时的值。但是用this可以做到选择当前元素
							$lbtn.click(function (){
								if($(this).attr("value")=="显示表格"){
									$(this).next().show();
									$(this).attr("value","隐藏表格");
								}
								else {
									$(this).next().hide();
									$(this).attr("value","显示表格");
								}
							});
							
							//为右边流量图动态建立一个$rdiv,并在其中画图
							var $rdiv = $("<div id="+resname+"R"+" style='height: 500px; width: 600px'></div>");
							$subdiv.append($rdiv);
							draw_spline(rsstdata2,resname,"水位信息图",resname+"R","水位");	
							//加入按钮
							var $rvbtn = $("<input type='button' value='隐藏特征值'></input>");
							$subdiv.append($rvbtn);
							//加入统计特征值的表格div并且在其中制表
							var $rValueDiv = $("<div id="+resname+"Rvtb"+" style='height:300px;width:600px;border:solid'></div>");
							$rvbtn.after($rValueDiv);
							value_table(chart.xAxis[0].dataMin,chart.xAxis[0].dataMax,rsstdata2,resname+"Rvtb");
							$rvbtn.click(function (){
								if($(this).attr("value")=="显示特征值"){
									$(this).next().show();
									$(this).attr("value","隐藏特征值");
								}
								else {
									$(this).next().hide();
									$(this).attr("value","显示特征值");
								}
							});
							//加入按钮
							var $rbtn = $("<input type='button' value='隐藏表格'></input>");
							$subdiv.append($rbtn);
							//加入表格$rtbdiv，并在其中制表
							var $rtbdiv = $("<div id="+resname+"Rtb"+" style='height:300px;width:600px;border:solid;overflow-y:scroll'></div>");
							$rbtn.after($rtbdiv);
							spline_table(rsstdata2,resname+"Rtb",resname);
							$rbtn.click(function (){
								if($(this).attr("value")=="显示表格"){
									$(this).next().show();
									$(this).attr("value","隐藏表格");
								}
								else {
									$(this).next().hide();
									$(this).attr("value","显示表格");
								}
								
							});
						}
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




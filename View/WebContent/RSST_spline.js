/**
 * 为  水库实时信息表  图形和表等动态建立div。
 * 
 * 备注：div层次说明————
 * $div:  表级div（在main.js中）
 * $subdiv:水库级div  
 * $ldiv：水库div中的左边的div（流量图）   $rdiv：水库div中的右边的div（水位图）
 * $lvalueDiv:左边的特征值表             $rvalueDiv：右边的特征值表
 * $ltbdiv:左边的表div      $rtbdiv：右边的表div
 */

function RSST_spline (resname){
	
	//为RSST表中的水库动态建立一个$subdiv。加入到$div中
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
	var $lValueDiv = $("<div id="+resname+"Lvtb"+" style='height:300px;width:600px;border:solid;overflow-y:scroll'></div>");
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
	var $rValueDiv = $("<div id="+resname+"Rvtb"+" style='height:300px;width:600px;border:solid;overflow-y:scroll'></div>");
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
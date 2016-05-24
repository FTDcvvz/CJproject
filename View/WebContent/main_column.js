/**
 * 为柱状图图形和表等动态建立div，传水库名参数进来
 */

function main_column (resname,div){
		/**
		 *备注：div层次说明————
		 *$div:  最外层表级div （在main.js中定义）
		 *$subdiv:水库级div  
		 *$chartdiv：画chart用的div   
		 *$valueDiv:特征值表div      
		 */
		
		//为表中的水库动态建立一个$subdiv。加入到$div中
		var $subdiv = $("<div style='border:solid'></div>");
		$("#"+div).append($subdiv);
		
		//chartdiv，并在其中画图
		var $chartdiv = $("<div id="+resname+" style='height: 500px; width: 600px'></div>");
		$subdiv.append($chartdiv);
		//根据配置项决定是否3d
		var enable3d;
		if($("input[name='type']:checked").val()=="false")
			enable3d = false;
		else enable3d = true;
		
		draw_column(rsstdata1.concat(rsstdata2),resname,"subtitle",resname,enable3d);
		//加入按钮
		var $btn = $("<input type='button' value='隐藏特征值'></input>");
		$subdiv.append($btn);
		//加入统计特征值的表格div并且在其中制表
		var $valueDiv = $("<div id="+resname+"vtb"+" style='height:300px;width:600px;border:solid;overflow-y:scroll'></div>");
		$btn.after($valueDiv);
		//这里的chart变量是从draw_column.js文件中传来的，里面定义了全局变量chart，每画一次图都会为chart赋值
		value_table(chart.xAxis[0].dataMin,chart.xAxis[0].dataMax,rsstdata1.concat(rsstdata2),resname+"vtb");
		$btn.click(function (){
			if($(this).attr("value")=="显示特征值"){
				$(this).next().show();
				$(this).attr("value","隐藏特征值");
			}
			else {
				$(this).next().hide();
				$(this).attr("value","显示特征值");
			}
		});
}
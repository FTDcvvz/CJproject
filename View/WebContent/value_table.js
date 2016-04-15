/**
 * xMin xMax ：x轴（时间轴）最小值、最大值
 */
var max = [];
var min = [];
var avg = [];
var total = [];   //最大值、最小值、平均值、累计值

function setValue (xMin,xMax,data){
	for(var i=0;i<data.length;i++){
		var tmpMax =0 ,tmpMin = 1000000 ,tmpAvg,tmpTotal = 0;
		for(var j=0;j<data[i].data.length;j++){
			if(data[i].data[j][0] < xMin)
				continue;
			else if(data[i].data[j][0] > xMax)
				break;
			else{
				if(data[i].data[j][1] > tmpMax){
					tmpMax = data[i].data[j][1];
				}
				if(data[i].data[j][1] < tmpMin){
					tmpMin = data[i].data[j][1];
				}
				tmpTotal = tmpTotal + data[i].data[j][1];
			}
		}
		tmpTotal = tmpTotal.toFixed(3);
		tmpAvg = (tmpTotal/j).toFixed(3);	//	保留小数点后三位小数（IE5.5+）
		
		max[i] = tmpMax;
		min[i] = tmpMin;
		avg[i] = tmpAvg;
		total[i] = tmpTotal;
	}
}

function value_table (xMin,xMax,data,divArea){
	var length = data.length;                 //一共有多少个数据
	setValue(xMin,xMax,data);                 //计算当前时段的各个特征值
	
	var d1 = new Date();
	var d2 = new Date();
	d1.setTime(xMin);
	d2.setTime(xMax);
	var $table = $("<table><caption>当前时段："+d1.toDateString()+"--"+d2.toDateString()+"</caption></table>");
	//先把当前区域的表格移除
	$("#"+divArea+">table").remove();
	
	$("#"+divArea).append($table);
	
	var $thead = $("<thead><tr></tr></thead>");//表头
	$table.append($thead);
	
	var $tzbl = $("<th width='100px'>特征变量</th>");  //表头第一列"特征变量"
	$thead.append($tzbl);
	for(var i=0;i<length;i++){
		var $th = $("<th width='100px'>"+data[i].name+"</th>")//其他表头列
		$thead.append($th);
	}
	
	var $tbody = $("<tbody></tbody>");
	$table.append($tbody);				//表身
	
	var $tr;
	//最大值
	$tr = $("<tr><td>最大值</td></tr>");
	$tbody.append($tr);
	for(var i=0;i<length;i++){
		$td = $("<td>"+max[i]+"</td>");
		$tr.append($td);
	}
	//最小值
	$tr = $("<tr><td>最小值</td></tr>");
	$tbody.append($tr);
	for(var i=0;i<length;i++){
		$td = $("<td>"+min[i]+"</td>");
		$tr.append($td);
	}
	//平均值
	$tr = $("<tr><td>平均值</td></tr>");
	$tbody.append($tr);
	for(var i=0;i<length;i++){
		$td = $("<td>"+avg[i]+"</td>");
		$tr.append($td);
	}
	//累计值
	$tr = $("<tr><td>累计值</td></tr>");
	$tbody.append($tr);
	for(var i=0;i<length;i++){
		$td = $("<td>"+total[i]+"</td>");
		$tr.append($td);
	}
	
}


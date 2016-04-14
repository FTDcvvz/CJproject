/**
 * xMin xMax ：x轴（时间轴）最小值、最大值
 */
function value_table (xMin,xMax,data,divArea){
	var d1 = new Date();
	var d2 = new Date();
	d1.setTime(xMin);
	d2.setTime(xMax);
	var $table = $("<table><caption>当前时段："+d1.toDateString()+"--"+d2.toDateString()+"</caption></table>");
	$("#"+divArea).append($table);
	
	var $thead = $("<thead><tr></tr></thead>");//表头
	$table.append($thead);
	
	var $tzbl = $("<th width='100px'>特征变量</th>");  //表头第一列"特征变量"
	$thead.append($tzbl);
	for(var i=0;i<data.length;i++){
		var $th = $("<th width='100px'>"+data[i].name+"</th>")//其他表头列
		$thead.append($th);
	}
	
	
}
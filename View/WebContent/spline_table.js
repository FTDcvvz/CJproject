/**
 * data:数据  数据格式一定要是：[{name:xxx,data:abc},...]
 * 							   其中abc格式是：abc = [[时间,数据],[时间,数据],[时间,数据],[时间,数据],...]
 * divarea：div区域
 * caption：表名
 */
function spline_table (data,divarea,caption){
	var $table = $("<table id="+divarea+"table"+"><caption>"+caption+"</caption></table>");//表
	$("#"+divarea).append($table);
	var $thead = $("<thead><tr></tr></thead>");//表头
	$table.append($thead);
	var $time = $("<th width='100px'>时间</th>");
	$thead.append($time);						//表头第一列是时间
	for(var i=0;i<data.length;i++){
		var $th = $("<th width='100px'>"+data[i].name+"</th>")//其他表头列
		$thead.append($th);
	}
	var $tbody = $("<tbody></tbody>");//表身
	$table.append($tbody);
	for(var i=0;i<data[0].data.length;i++){
		var $tr = $("<tr></tr>");		//tr
		$tbody.append($tr);
		var d = new Date();
		d.setTime(data[0].data[i][0]);
		var $timetd = $("<td>"+d.toDateString()+"</td>");	//时间这一列的td
		$tr.append($timetd);
		for(var j=0;j<data.length;j++){
			var $td = $("<td>"+data[j].data[i][1]+"</td>"); //其他列的td
			$tr.append($td);
		}
	}
	
}
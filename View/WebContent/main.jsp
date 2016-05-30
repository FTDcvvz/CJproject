<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html">
<title>main</title>
<script src="http://cdn.hcharts.cn/jquery/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="highcharts.js"></script>
<script type="text/javascript" src="highcharts.src.js"></script>
<script type="text/javascript" src="highcharts-3d.js"></script>
<script type="text/javascript" src="highcharts-3d.src.js"></script>
<script src="http://cdn.hcharts.cn/highcharts/modules/exporting.js"></script>
<script src="http://cdn.hcharts.cn/libs/highcharts-export-csv/export-csv.js"> </script>
<script src="https://rawgit.com/masih/draggable-legend-box/master/draggable-legend-box.js"></script>
<script type="text/javascript" src="json2.js"></script>
<script type="text/javascript" src="main.js"></script>
<script type="text/javascript" src="spline_table.js"></script>
<script type="text/javascript" src="value_table.js"></script>
<script type="text/javascript" src="RSST_spline.js"></script>
<script type="text/javascript" src="draw_spline.js"></script>
<script type="text/javascript" src="main_column.js"></script>
<script type="text/javascript" src="draw_column.js"></script>
<script type="text/javascript" src="main_pie.js"></script>
<script type="text/javascript" src="draw_pie.js"></script>


</head>

<body>
	<s:checkboxlist name="rsnmlist" list="resNames" label="请选择水库" 
	labelposition="top" >
	</s:checkboxlist>
	<br/>
	<s:checkboxlist name="tables" list="#{'RS_RSST_R':'水库实时数据表','RS_RSZP_B':'水库水位库容曲线表',
	'RS_RSSCG_B':'水库调度图表'}" listKey ="key" listValue="value" label="请选择数据表" labelposition="top" >
	</s:checkboxlist>
	<br/>
	<input id="btn" type="button" value="确定" />
	
	<!-- 柱状图的配置项 -->
	<h2>柱状图配置项</h2>
	<s:radio list="#{'false':'平面图','true':'立体图'}" name="type" value="false"/>
	<br/>
																				
	<!-- 线型图的配置项 -->
	<h2>过程线配置项</h2>
	<table>
		<tr><td>线段粗细</td><td><input id="R0" type="range" min="1" max="10" value="3" /><span id="R0-value" class="value"></span></td></tr>
	</table>

</body>
</html>
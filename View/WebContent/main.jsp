<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>main</title>
<script src="http://cdn.hcharts.cn/jquery/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="highcharts.js"></script> 
<script type="text/javascript" src="json2.js"></script>
<script type="text/javascript" src="main.js"></script>
<script type="text/javascript" src="draw_spline.js"></script>

</head>

<body>
	<s:checkboxlist name="rsnmlist" list="resNames" label="请选择水库" 
	labelposition="top" >
	</s:checkboxlist>
	<br/>
	<s:checkboxlist name="tables" list="#{'RS_RSST_R':'水库实时数据表','RS_RSZP_B':'水库水位库容曲线表',
	'RS_RSSCG_B':'水库调度图表'}" listKey ="key" listValue="value" label="请选择数据表" labelposition="top" >
	</s:checkboxlist>
	<input id="btn" type="button" value="确定" />
	
	
</body>
</html>
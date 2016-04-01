<%@ page language="java" contentType="text/html; charset=gb2312"
    pageEncoding="gb2312"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>main</title>
<script src="http://cdn.hcharts.cn/jquery/jquery-1.8.3.min.js"></script>
<script src="http://cdn.hcharts.cn/highcharts/highcharts.js"></script> 
<script type="text/javascript" src="json2.js"></script>
<script type="text/javascript" src="main.js"></script>

</head>

<body>
	<s:checkboxlist name="rsnmlist" list="resNames" label="请选择水库" 
	labelposition="top" >
	</s:checkboxlist>
	
	<s:checkboxlist name="tables" list="tablelist" label="请选择数据表" 
	labelposition="top" >
	</s:checkboxlist>
	<input id="btn" type="button" value="确定" />
	
	<s:checkboxlist name="highchartsconfig" list="configlist" label="请选择需要显示的数据" 
	labelposition="top" >
	</s:checkboxlist>
	<input id=configbtn type="button" value="确定" />
	
	<div id="container" style="min-width:400px;height:400px"></div>
</body>
</html>
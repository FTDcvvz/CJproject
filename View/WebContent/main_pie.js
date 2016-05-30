/**
 * 为饼状图动态建立div
 * 根据选择的属性和日期，获得饼状图的数据，然后调用画图函数
 */
function main_pie (div){
		/**
		 *备注：div层次说明————
		 *$div: 最外层表级div （在main.js中定义）
		 *$optdiv: 选择属性和日期用的div
		 *$chartdiv：画chart用的div        
		 */
		
		var $optdiv = $("<div></div>");
		$("#"+div).append($optdiv);
		var $options = 
				$(
				"<label>请选择属性: </label>"+
				"<select id='attr'>" +
				"<option value ='select' selected='selected'>--请选择--</option>" +
				"<option value ='inq'>入库流量</option>" +
				"<option value ='dcq'>出库流量</option>" +
				"<option value ='z'>库水位</option>" +
				"<option value ='gq'>发电流量</option>" +
				"<option value ='dq'>弃水流量</option>" +
				"<option value ='twz'>库下水位</option>" +
				"</select>" +
				"<br/>" +
				"<label>请选择日期: </label>"+
				"<select id='year'>" +
				"<option value = 1970>1970</option>" +
				"<option value = 1971>1971</option>" +
				"<option value = 1972>1972</option>" +
				"<option value = 1973>1973</option>" +
				"<option value = 1974>1974</option>" +
				"<option value = 1975>1975</option>" +
				"<option value = 1976>1976</option>" +
				"<option value = 1977>1977</option>" +
				"<option value = 1978>1978</option>" +
				"<option value = 1979>1979</option>" +
				"<option value = 1980>1980</option>" +
				"<option value = 1981>1981</option>" +
				"<option value = 1982>1982</option>" +
				"<option value = 1983>1983</option>" +
				"<option value = 1984>1984</option>" +
				"<option value = 1985>1985</option>" +
				"<option value = 1986>1986</option>" +
				"<option value = 1987>1987</option>" +
				"<option value = 1988>1988</option>" +
				"<option value = 1989>1989</option>" +
				"<option value = 1990>1990</option>" +
				"<option value = 1991>1991</option>" +
				"<option value = 1992>1992</option>" +
				"<option value = 1993>1993</option>" +
				"<option value = 1994>1994</option>" +
				"<option value = 1995>1995</option>" +
				"<option value = 1996>1996</option>" +
				"<option value = 1997>1997</option>" +
				"<option value = 1998>1998</option>" +
				"<option value = 1999>1999</option>" +
				"<option value = 2000>2000</option>" +
				"<option value = 2001>2001</option>" +
				"<option value = 2002>2002</option>" +
				"<option value = 2003>2003</option>" +
				"<option value = 2004>2004</option>" +
				"<option value = 2005>2005</option>" +
				"<option value = 2006>2006</option>" +
				"<option value = 2007>2007</option>" +
				"<option value = 2008>2008</option>" +
				"<option value = 2009>2009</option>" +
				"<option value = 2010>2010</option>" +
				"<option value = 2011>2011</option>" +
				"<option value = 2012>2012</option>" +
				"<option value = 2013>2013</option>" +
				"<option value = 2014>2014</option>" +
				"<option value = 2015>2015</option>" +
				"<option value = 2016>2016</option>" +
				"<option value = 2017>2017</option>" +
				"<option value = 2018>2018</option>" +
				"<option value = 2019>2019</option>" +
				"<option value = 2020>2020</option>" +
				"<option value = 2021>2021</option>" +
				"<option value = 2022>2022</option>" +
				"<option value = 2023>2023</option>" +
				"<option value = 2024>2024</option>" +
				"<option value = 2025>2025</option>" +
				"<option value = 2026>2026</option>" +
				"<option value = 2027>2027</option>" +
				"<option value = 2028>2028</option>" +
				"<option value = 2029>2029</option>" +
				"<option value = 2030>2030</option>" +
				"<option value = 2031>2031</option>" +
				"<option value = 2032>2032</option>" +
				"<option value = 2033>2033</option>" +
				"<option value = 2034>2034</option>" +
				"<option value = 2035>2035</option>" +
				"<option value = 2036>2036</option>" +
				"<option value = 2037>2037</option>" +
				"<option value = 2038>2038</option>" +
				"<option value = 2039>2039</option>" +
				"<option value = 2040>2040</option>" +
				"</select>" +
				"<label>年</label>"+
				"<select id='month'>" +
				"<option value =1>01</option>" +	
				"<option value =2>02</option>" +	
				"<option value =3>03</option>" +	
				"<option value =4>04</option>" +	
				"<option value =5>05</option>" +	
				"<option value =6>06</option>" +	
				"<option value =7>07</option>" +	
				"<option value =8>08</option>" +	
				"<option value =9>09</option>" +	
				"<option value =10>10</option>" +	
				"<option value =11>11</option>" +	
				"<option value =12>12</option>" +	
				"</select>" +
				"<label>月</label>"+
				"<select id='day'>" +
				"<option value =1>01</option>" +	
				"<option value =2>02</option>" +	
				"<option value =3>03</option>" +	
				"<option value =4>04</option>" +	
				"<option value =5>05</option>" +	
				"<option value =6>06</option>" +	
				"<option value =7>07</option>" +	
				"<option value =8>08</option>" +	
				"<option value =9>09</option>" +	
				"<option value =10>10</option>" +	
				"<option value =11>11</option>" +	
				"<option value =12>12</option>" +	
				"<option value =13>13</option>" +	
				"<option value =14>14</option>" +	
				"<option value =15>15</option>" +	
				"<option value =16>16</option>" +	
				"<option value =17>17</option>" +	
				"<option value =18>18</option>" +	
				"<option value =19>19</option>" +	
				"<option value =20>20</option>" +	
				"<option value =21>21</option>" +	
				"<option value =22>22</option>" +	
				"<option value =23>23</option>" +	
				"<option value =24>24</option>" +	
				"<option value =25>25</option>" +	
				"<option value =26>26</option>" +	
				"<option value =27>27</option>" +	
				"<option value =28>28</option>" +	
				"<option value =29>29</option>" +	
				"<option value =30>30</option>" +	
				"<option value =31>31</option>" +	
				"</select>" +
				"<label>日</label>"+
				"<select id='hour'>" +
				"<option value =0>00</option>" +
				"<option value =1>01</option>" +	
				"<option value =2>02</option>" +	
				"<option value =3>03</option>" +	
				"<option value =4>04</option>" +	
				"<option value =5>05</option>" +	
				"<option value =6>06</option>" +	
				"<option value =7>07</option>" +	
				"<option value =8>08</option>" +	
				"<option value =9>09</option>" +	
				"<option value =10>10</option>" +	
				"<option value =11>11</option>" +	
				"<option value =12>12</option>" +	
				"<option value =13>13</option>" +	
				"<option value =14>14</option>" +	
				"<option value =15>15</option>" +	
				"<option value =16>16</option>" +	
				"<option value =17>17</option>" +	
				"<option value =18>18</option>" +	
				"<option value =19>19</option>" +	
				"<option value =20>20</option>" +	
				"<option value =21>21</option>" +	
				"<option value =22>22</option>" +	
				"<option value =23>23</option>" +						
				"</select>" +
				"<label>时</label>"+
				"<select id='minute'>" +
				"<option value =0>00</option>" +
				"<option value =1>01</option>" +	
				"<option value =2>02</option>" +	
				"<option value =3>03</option>" +	
				"<option value =4>04</option>" +	
				"<option value =5>05</option>" +	
				"<option value =6>06</option>" +	
				"<option value =7>07</option>" +	
				"<option value =8>08</option>" +	
				"<option value =9>09</option>" +	
				"<option value =10>10</option>" +	
				"<option value =11>11</option>" +	
				"<option value =12>12</option>" +	
				"<option value =13>13</option>" +	
				"<option value =14>14</option>" +	
				"<option value =15>15</option>" +	
				"<option value =16>16</option>" +	
				"<option value =17>17</option>" +	
				"<option value =18>18</option>" +	
				"<option value =19>19</option>" +	
				"<option value =20>20</option>" +	
				"<option value =21>21</option>" +	
				"<option value =22>22</option>" +	
				"<option value =23>23</option>" +
				"<option value =24>24</option>" +
				"<option value =25>25</option>" +	
				"<option value =26>26</option>" +	
				"<option value =27>27</option>" +	
				"<option value =28>28</option>" +	
				"<option value =29>29</option>" +	
				"<option value =30>30</option>" +	
				"<option value =31>31</option>" +	
				"<option value =32>32</option>" +	
				"<option value =33>33</option>" +	
				"<option value =34>34</option>" +	
				"<option value =35>35</option>" +	
				"<option value =36>36</option>" +	
				"<option value =37>37</option>" +	
				"<option value =38>38</option>" +	
				"<option value =39>39</option>" +	
				"<option value =40>40</option>" +	
				"<option value =41>41</option>" +	
				"<option value =42>42</option>" +	
				"<option value =43>43</option>" +	
				"<option value =44>44</option>" +	
				"<option value =45>45</option>" +	
				"<option value =46>46</option>" +	
				"<option value =47>47</option>" +
				"<option value =48>48</option>" +	
				"<option value =49>49</option>" +	
				"<option value =50>50</option>" +	
				"<option value =51>51</option>" +	
				"<option value =52>52</option>" +	
				"<option value =53>53</option>" +	
				"<option value =54>54</option>" +	
				"<option value =55>55</option>" +
				"<option value =56>56</option>" +	
				"<option value =57>57</option>" +	
				"<option value =58>58</option>" +	
				"<option value =59>59</option>" +	
				"</select>" +
				"<label>分</label>"+
				"<select id='second'>" +
				"<option value =0>00</option>" +
				"<option value =1>01</option>" +	
				"<option value =2>02</option>" +	
				"<option value =3>03</option>" +	
				"<option value =4>04</option>" +	
				"<option value =5>05</option>" +	
				"<option value =6>06</option>" +	
				"<option value =7>07</option>" +	
				"<option value =8>08</option>" +	
				"<option value =9>09</option>" +	
				"<option value =10>10</option>" +	
				"<option value =11>11</option>" +	
				"<option value =12>12</option>" +	
				"<option value =13>13</option>" +	
				"<option value =14>14</option>" +	
				"<option value =15>15</option>" +	
				"<option value =16>16</option>" +	
				"<option value =17>17</option>" +	
				"<option value =18>18</option>" +	
				"<option value =19>19</option>" +	
				"<option value =20>20</option>" +	
				"<option value =21>21</option>" +	
				"<option value =22>22</option>" +	
				"<option value =23>23</option>" +
				"<option value =24>24</option>" +
				"<option value =25>25</option>" +	
				"<option value =26>26</option>" +	
				"<option value =27>27</option>" +	
				"<option value =28>28</option>" +	
				"<option value =29>29</option>" +	
				"<option value =30>30</option>" +	
				"<option value =31>31</option>" +	
				"<option value =32>32</option>" +	
				"<option value =33>33</option>" +	
				"<option value =34>34</option>" +	
				"<option value =35>35</option>" +	
				"<option value =36>36</option>" +	
				"<option value =37>37</option>" +	
				"<option value =38>38</option>" +	
				"<option value =39>39</option>" +	
				"<option value =40>40</option>" +	
				"<option value =41>41</option>" +	
				"<option value =42>42</option>" +	
				"<option value =43>43</option>" +	
				"<option value =44>44</option>" +	
				"<option value =45>45</option>" +	
				"<option value =46>46</option>" +	
				"<option value =47>47</option>" +
				"<option value =48>48</option>" +	
				"<option value =49>49</option>" +	
				"<option value =50>50</option>" +	
				"<option value =51>51</option>" +	
				"<option value =52>52</option>" +	
				"<option value =53>53</option>" +	
				"<option value =54>54</option>" +	
				"<option value =55>55</option>" +
				"<option value =56>56</option>" +	
				"<option value =57>57</option>" +	
				"<option value =58>58</option>" +	
				"<option value =59>59</option>" +	
				"</select>" +
				"<label>秒</label>"+
				"<br/>" +
				"<input id='piebtn' type='button' value='确定' onclick='getpiedata()'/>"
				);
		$optdiv.append($options);
		var $chartdiv = $("<div id='piechart' style='height:500px; width: 600px; border:solid'></div>");
		$("#"+div).append($chartdiv);
}

function getpiedata (){
	//使用数组前将数组清空
	dataforpie.length = 0;
	
	var temp = [];
	var attr = $("#attr option:selected").text();
	var year,month,day,hour,minute,second;
	year = +$("#year option:selected").text();
	month = +$("#month option:selected").text()-1;
	day = +$("#day option:selected").text();
	hour = +$("#hour option:selected").text();
	minute = +$("#minute option:selected").text();
	second = +$("#second option:selected").text();
	var time = Date.UTC(year,month,day,hour,minute,second);
	for(var j=0;j<selectedItems.length;j++){
		temp = [];
		temp.push(selectedItems[j]);
		for(var i=0;i<selectedInfo[j].length;i++){
			var str = selectedInfo[j][i].time;
			var UTCdate = Date.parse(str);
			if(UTCdate == time){
				switch (attr){
				case '入库流量':
					temp.push(selectedInfo[j][i].inQ);
					break;
				case '出库流量':
					temp.push(selectedInfo[j][i].discQ);
					break;
				case '库水位':
					temp.push(selectedInfo[j][i].z);
					break;
				case '发电流量':
					temp.push(selectedInfo[j][i].genDiscQ);
					break;
				case '弃水流量':
					temp.push(selectedInfo[j][i].gateDiscQ);
					break;
				case '库下水位':
					temp.push(selectedInfo[j][i].downZ);
					break;
				}
			}
		}
		if(temp.length == 2)				//必须要求数据是二维数组，否则画图会出错
			dataforpie.push(temp);
	}
	draw_pie(dataforpie,"主标题","副标题","piechart");
}

	
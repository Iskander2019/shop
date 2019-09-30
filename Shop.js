// JavaScript Document
var basket_sensor={};									// Корзина
$('document').ready(function() {
   loadsensor();
});
function loadsensor () {

	$.getJSON('sensors.json', function(data) {
//		console.log (data);
		var out="";
		for (var key in data)
		{
			out+="<div class=' Sens'>";
			out+="<p>"+key+"</p>";
			out+="<img src=' "+data[key]['image']+" '>";
			out+="<p>"+data[key]['watt']+"</p>";
			out+="<button class='basket' data-sensor=' " +key+" '>Добавить</button> ";
			out+="</div>";			
		}
		$('#Show_Sensor').html(out);
		$(".basket").on("click", addSensor);
	})
}

function addSensor () {
		var art=$(this).attr("data-sensor");
		if(basket_sensor[art]!=undefined)
				basket_sensor[art]++;
		else
				basket_sensor[art]=1;
		console.log(art);
		var art=" DA-14 ";
		console.log(art);
		console.log(basket_sensor[art]);
		$("#kol").html(basket_sensor[art]);
	$("#kol2").html(basket_sensor[" DUG-14 "]);
	localStorage.setItem(" basket_sensor",JSON.stringify(basket_sensor));
	
}
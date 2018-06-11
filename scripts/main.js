var url = 'http://api.openweathermap.org/data/2.5/weather?zip=' + $("#zip").val() + '&appid=e1a429d14db826bfce808cc25933fa12';
var Hendersonville = 'http://api.openweathermap.org/data/2.5/weather?zip=37075&appid=e1a429d14db826bfce808cc25933fa12';
var BigSandy = 'http://api.openweathermap.org/data/2.5/weather?zip=38221&appid=e1a429d14db826bfce808cc25933fa12';
var Clarksville = 'http://api.openweathermap.org/data/2.5/weather?zip=37040&appid=e1a429d14db826bfce808cc25933fa12';
var Gallatin = 'http://api.openweathermap.org/data/2.5/weather?zip=37066&appid=e1a429d14db826bfce808cc25933fa12';
var Nashville = 'http://api.openweathermap.org/data/2.5/weather?zip=37011&appid=e1a429d14db826bfce808cc25933fa12';
var Jackson = 'http://api.openweathermap.org/data/2.5/weather?zip=38301&appid=e1a429d14db826bfce808cc25933fa12';
var Murfreesboro = 'http://api.openweathermap.org/data/2.5/weather?zip=37127&appid=e1a429d14db826bfce808cc25933fa12';
var Memphis = 'http://api.openweathermap.org/data/2.5/weather?zip=38002&appid=e1a429d14db826bfce808cc25933fa12';
var Knoxville = 'http://api.openweathermap.org/data/2.5/weather?zip=37901&appid=e1a429d14db826bfce808cc25933fa12';
var Paris = 'http://api.openweathermap.org/data/2.5/weather?zip=38242&appid=e1a429d14db826bfce808cc25933fa12';
var Oakridge = 'http://api.openweathermap.org/data/2.5/weather?zip=37748&appid=e1a429d14db826bfce808cc25933fa12';


// $("#zipCode").click(function(){
// 	$.getJSON(url,function(result){
// 		console.log(result);
// 	});
// });

$("#Hendersonville").click(function(){
	$("#hendoData").css("display", "inline-block");
	$("#bsData").css("display", "none");
	$("#clarkData").css("display", "none");
	$("#gallData").css("display", "none");
	$("#nashData").css("display", "none");
	$("#jackData").css("display", "none");
	$("#murfData").css("display", "none");
	$("#memData").css("display", "none");
	$("#knoxData").css("display", "none");
	$("#parisData").css("display", "none");
	$("#oakData").css("display", "none");


	$.getJSON(Hendersonville,function(result){
		$("#hendoData").append(result.weather[0].main,"<br>" + result.weather[0].description,"<br>" + "Temp:" + result.main.temp);
		console.log(result.weather[0].main, result.weather[0].description,"Temp: " + result.main.temp, result);
	});
	$("#hendoData").append("Hendersonville<br>")

	$("#Hendersonville").off();

});

$("#BigSandy").click(function(){
	$("#bsData").css("display", "inline-block");
	$("#hendoData").css("display", "none");
	$("#clarkData").css("display", "none");
	$("#gallData").css("display", "none");
	$("#nashData").css("display", "none");
	$("#jackData").css("display", "none");
	$("#murfData").css("display", "none");
	$("#memData").css("display", "none");
	$("#knoxData").css("display", "none");
	$("#parisData").css("display", "none");
	$("#oakData").css("display", "none");


	$.getJSON(BigSandy,function(result){
		$("#bsData").append(result.weather[0].main,"<br>" + result.weather[0].description,"<br>" + "Temp:" + result.main.temp);
		console.log(result.weather[0].main, result.weather[0].description,"Temp: " + result.main.temp, result);
	});

	$("#bsData").append("Big Sandy<br>")
	$("#BigSandy").off();

});

$("#Clarksville").click(function(){
	$("#clarkData").css("display", "inline-block");
	$("#hendoData").css("display", "none");
	$("#bsData").css("display", "none");
	$("#gallData").css("display", "none");
	$("#nashData").css("display", "none");
	$("#jackData").css("display", "none");
	$("#murfData").css("display", "none");
	$("#memData").css("display", "none");
	$("#knoxData").css("display", "none");
	$("#parisData").css("display", "none");
	$("#oakData").css("display", "none");


	$.getJSON(Clarksville,function(result){
		$("#clarkData").append(result.weather[0].main,"<br>" + result.weather[0].description,"<br>" + "Temp:" + result.main.temp);
		console.log(result.weather[0].main, result.weather[0].description,"Temp: " + result.main.temp, result);
	});

	$("#clarkData").append("Clarksville<br>")

	$("#Clarksville").off();

});

$("#Gallatin").click(function(){
	$("#gallData").css("display", "inline-block");
	$("#hendoData").css("display", "none");
	$("#bsData").css("display", "none");
	$("#clarkData").css("display", "none");
	$("#nashData").css("display", "none");
	$("#jackData").css("display", "none");
	$("#murfData").css("display", "none");
	$("#memData").css("display", "none");
	$("#knoxData").css("display", "none");
	$("#parisData").css("display", "none");
	$("#oakData").css("display", "none");


	$.getJSON(Gallatin,function(result){
		$("#gallData").append(result.weather[0].main,"<br>" + result.weather[0].description,"<br>" + "Temp:" + result.main.temp);
		console.log(result.weather[0].main, result.weather[0].description,"Temp: " + result.main.temp, result);
	});

	$("#gallData").append("Gallatin<br>")

	$("#Gallatin").off();

});

$("#Nashville").click(function(){
	$("#nashData").css("display", "inline-block");
	$("#hendoData").css("display", "none");
	$("#bsData").css("display", "none");
	$("#clarkData").css("display", "none");
	$("#gallData").css("display", "none");
	$("#jackData").css("display", "none");
	$("#murfData").css("display", "none");
	$("#memData").css("display", "none");
	$("#knoxData").css("display", "none");
	$("#parisData").css("display", "none");
	$("#oakData").css("display", "none");


	$.getJSON(Nashville,function(result){
		$("#nashData").append(result.weather[0].main,"<br>" + result.weather[0].description,"<br>" + "Temp:" + result.main.temp);
		console.log(result.weather[0].main, result.weather[0].description,"Temp: " + result.main.temp, result);
	});

	$("#nashData").append("Nashville<br>")

	$("#Nashville").off();

});

$("#Jackson").click(function(){
	$("#jackData").css("display", "inline-block");
	$("#hendoData").css("display", "none");
	$("#bsData").css("display", "none");
	$("#clarkData").css("display", "none");
	$("#gallData").css("display", "none");
	$("#nashData").css("display", "none");
	$("#murfData").css("display", "none");
	$("#memData").css("display", "none");
	$("#knoxData").css("display", "none");
	$("#parisData").css("display", "none");
	$("#oakData").css("display", "none");


	$.getJSON(Jackson,function(result){
		$("#jackData").append(result.weather[0].main,"<br>" + result.weather[0].description,"<br>" + "Temp:" + result.main.temp);
		console.log(result.weather[0].main, result.weather[0].description,"Temp: " + result.main.temp, result);
	});

	$("#jackData").append("Jackson<br>")

	$("#Jackson").off();

});

$("#Murfreesboro").click(function(){
	$("#murfData").css("display", "inline-block");
	$("#hendoData").css("display", "none");
	$("#bsData").css("display", "none");
	$("#clarkData").css("display", "none");
	$("#gallData").css("display", "none");
	$("#nashData").css("display", "none");
	$("#jackData").css("display", "none");
	$("#memData").css("display", "none");
	$("#knoxData").css("display", "none");
	$("#parisData").css("display", "none");
	$("#oakData").css("display", "none");


	$.getJSON(Murfreesboro,function(result){
		$("#murfData").append(result.weather[0].main,"<br>" + result.weather[0].description,"<br>" + "Temp:" + result.main.temp);
		console.log(result.weather[0].main, result.weather[0].description,"Temp: " + result.main.temp, result);
	});
	$("#murfData").append("Murfreesboro<br>")
	$("#Murfreesboro").off();

});

$("#Memphis").click(function(){
	$("#memData").css("display", "inline-block");
	$("#hendoData").css("display", "none");
	$("#bsData").css("display", "none");
	$("#clarkData").css("display", "none");
	$("#gallData").css("display", "none");
	$("#nashData").css("display", "none");
	$("#jackData").css("display", "none");
	$("#murfData").css("display", "none");
	$("#knoxData").css("display", "none");
	$("#parisData").css("display", "none");
	$("#oakData").css("display", "none");


	$.getJSON(Memphis,function(result){
		$("#memData").append(result.weather[0].main,"<br>" + result.weather[0].description,"<br>" + "Temp:" + result.main.temp);
		console.log(result.weather[0].main, result.weather[0].description,"Temp: " + result.main.temp, result);
	});

	$("#memData").append("Memphis<br>")

	$("#Memphis").off();

});

$("#Knoxville").click(function(){
	$("#knoxData").css("display", "inline-block");
	$("#hendoData").css("display", "none");
	$("#bsData").css("display", "none");
	$("#clarkData").css("display", "none");
	$("#gallData").css("display", "none");
	$("#nashData").css("display", "none");
	$("#jackData").css("display", "none");
	$("#murfData").css("display", "none");
	$("#memData").css("display", "none");
	$("#parisData").css("display", "none");
	$("#oakData").css("display", "none");


	$.getJSON(Knoxville,function(result){
		$("#knoxData").append(result.weather[0].main,"<br>" + result.weather[0].description,"<br>" + "Temp:" + result.main.temp);
		console.log(result.weather[0].main, result.weather[0].description,"Temp: " + result.main.temp, result);
	});

	$("#knoxData").append("Knoxville<br>")

	$("#Knoxville").off();

});

$("#Paris").click(function(){
	$("#parisData").css("display", "inline-block");
	$("#hendoData").css("display", "none");
	$("#bsData").css("display", "none");
	$("#clarkData").css("display", "none");
	$("#gallData").css("display", "none");
	$("#nashData").css("display", "none");
	$("#jackData").css("display", "none");
	$("#murfData").css("display", "none");
	$("#memData").css("display", "none");
	$("#knoxData").css("display", "none");
	$("#oakData").css("display", "none");


	$.getJSON(Paris,function(result){
		$("#parisData").append(result.weather[0].main,"<br>" + result.weather[0].description,"<br>" + "Temp:" + result.main.temp);
		console.log(result.weather[0].main, result.weather[0].description,"Temp: " + result.main.temp, result);
	});

	$("#parisData").append("Paris<br>")

	$("#Paris").off();

});

$("#Oakridge").click(function(){
	$("#oakData").css("display", "inline-block");
	$("#hendoData").css("display", "none");
	$("#bsData").css("display", "none");
	$("#clarkData").css("display", "none");
	$("#gallData").css("display", "none");
	$("#nashData").css("display", "none");
	$("#jackData").css("display", "none");
	$("#murfData").css("display", "none");
	$("#memData").css("display", "none");
	$("#knoxData").css("display", "none");
	$("#parisData").css("display", "none");


	$.getJSON(Oakridge,function(result){
		$("#oakData").append(result.weather[0].main,"<br>" + result.weather[0].description,"<br>" + "Temp:" + result.main.temp);
		console.log(result.weather[0].main, result.weather[0].description,"Temp: " + result.main.temp, result);
	});

	$("#oakData").append("Oakridge<br>")

	$("#Oakridge").off();

});
	









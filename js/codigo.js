function init()
{
	$("div:jqmData(role='panel')").css('margin-top',  ($("div:jqmData(role='header')").height()));
	
}
function miPocision()
{
	$("#contenedor").load("mapa.html");
	navigator.geolocation.getCurrentPosition(initialize, onError); 
}
var map; 

function initialize(position) { 
$("#map-canvas").css("width","100%");
$("#map-canvas").css("height","200px");

myLatlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);

var mapOptions = { 
zoom: 18, 
center: myLatlng 
}; 
map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions); 

} 

function onBodyLoad(){

}
                     
function onError(error) { 
$("#map-canvas").css("width","100%");
$("#map-canvas").css("height","200px");
myLatlng = new google.maps.LatLng(-34.397, 150.644);

var mapOptions = { 
zoom: 18, 
center: myLatlng 
}; 
map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
} 
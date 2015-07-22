function init()
{
	$("div:jqmData(role='panel')").css('margin-top',  ($("div:jqmData(role='header')").height()));
	
}
function miPocision(){

	$("#contenedor").html('<center><h4>Mi pocision actual</h4></center><div id="map-canvas"></div>');
	navigator.geolocation.getCurrentPosition(initialize, onError); 
}
var map; 

function initialize(position) { 
$("#map-canvas").css("width","100%");
$("#map-canvas").css("height","300px");

myLatlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);

var mapOptions = { 
zoom: 10, 
center: myLatlng 
}; 
map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions); 
var marcador = new google.maps.Marker({
      position:myLatlng,
      map:map,
      animation:google.maps.Animation.DROP,
      draggable:false
     });
} 

function onBodyLoad(){

}
                     
function onError(error) { 
$("#map-canvas").css("width","100%");
$("#map-canvas").css("height","300px");
myLatlng = new google.maps.LatLng(-34.397, 150.644);

var mapOptions = { 
zoom: 10, 
center: myLatlng 
}; 
map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
var marcador = new google.maps.Marker({
      position:myLatlng,
      map:map,
      animation:google.maps.Animation.DROP,
      draggable:false
     });
} 

function setDato()
{
	var clave=prompt("Dame clave");
	var valor=prompt("Dame valor");
	window.localStorage.setItem("key2", "value2");
}
function getDato()
{
	 var clave=prompt("Dame clave");
	 var value = window.localStorage.getItem(clave);
	 alert("El valor es "+value);
}
function clearDato()
{
	 window.localStorage.clear();
}
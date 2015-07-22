function init()
{
	$("div:jqmData(role='panel')").css('margin-top',  ($("div:jqmData(role='header')").height()));
	
}
var map; 

function initialize(position) { 
$("#map-canvas").css("width",screen.width);
$("#map-canvas").css("height",screen.height);
myLatlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);

var mapOptions = { 
zoom: 8, 
center: myLatlng 
}; 
map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions); 

} 

function onBodyLoad(){
navigator.geolocation.getCurrentPosition(initialize, onError); 
}
                     
function onError(error) { 
 $("#map-canvas").css("width",screen.width);
$("#map-canvas").css("height",screen.height);
myLatlng = new google.maps.LatLng(-34.397, 150.644);

var mapOptions = { 
zoom: 8, 
center: myLatlng 
}; 
map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
} 
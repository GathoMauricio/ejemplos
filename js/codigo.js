function init()
{
	$("div:jqmData(role='panel')").css('margin-top',  ($("div:jqmData(role='header')").height()));
	
}
var map; 

function initialize(lat,lon) { 

myLatlng = new google.maps.LatLng(lat, lon);

var mapOptions = { 
zoom: 8, 
center: myLatlng 
}; 
map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions); 
} 

google.maps.event.addDomListener(window, 'load', initialize);
function onBodyLoad(){
navigator.geolocation.getCurrentPosition(onSuccess, onError); 
initialize(position.coords.latitude,position.coords.longitude); 
}
function onDeviceReady() { 
navigator.geolocation.getCurrentPosition(onSuccess, onError); 
} 
             
function onSuccess(position) { 
initialize(position.coords.latitude,position.coords.longitude); 
} 
                       
function onError(error) { 
alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n'); 
} 
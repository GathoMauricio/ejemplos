function init()
{
	$("div:jqmData(role='panel')").css('margin-top',  ($("div:jqmData(role='header')").height()));
	
}
var map; 

function initialize(position) { 

myLatlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);

var mapOptions = { 
zoom: 8, 
center: myLatlng 
}; 
map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions); 
alert(map);
} 



function onBodyLoad(){
navigator.geolocation.getCurrentPosition(initialize, onError); 

}
function onDeviceReady() { 
navigator.geolocation.getCurrentPosition(onSuccess, onError); 
} 
             
function onSuccess(position) { 
initialize(position.coords.latitude,position.coords.longitude); 
//alert(position.coords.latitude+" / "+position.coords.longitude);
} 
                       
function onError(error) { 
alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n'); 
} 
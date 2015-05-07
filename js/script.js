// JavaScript Document

function init() {
		document.addEventListener("deviceready", onDeviceReady, true);         
} 

var onDeviceReady = function() {
           
	window.addEventListener("batterystatus", onBatteryStatus, false);
	window.addEventListener("batterylow", onBatteryLow, false);
	window.addEventListener("batterycritical", onBatteryCritical, false);
	
		  // Pongo el status azul cuando el device esta ready
		  var status = document.getElementById("status");
  		  status.style.backgroundColor = "#00F";				
};




function onBatteryStatus(info) {
    // Handle the online event
	// Este evento se dispara cuando un porcentaje de la bateria cambia en al menos 1% o si uno desconecta o conecta el celular a cargar
	
	var element = document.getElementById('estadobateria');
	element.innerHTML = 'Porcentaje de bateria: '+ info.level + "%" + " se esta cargando: " + info.isPlugged + '<br />';

	if (info.isPlugged == false){
		
		// Status rojo cuando no esta cargando
		 var status = document.getElementById("status");
  		  status.style.backgroundColor = "#F00";
	}else{
		  // Status verde cuando esta cargando
		  var status = document.getElementById("status");
  		  status.style.backgroundColor = "#0F0";
	}

    //console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
}


function onBatteryLow(info) {
    // Handle the battery low event
	// Este evento se dispara cuando el porcentaje de la bateria alcanzo el nivel de bateria baja (el valor es especifico en cada dispositivo)
	
	var element = document.getElementById('bateriabaja');
	element.innerHTML = 'Porcentaje de bateria: '+ info.level + "%" + "ponga a carga su telefono!" + '<br />';
	
	
    //alert("Battery Level Low " + info.level + "%");
}

function onBatteryCritical(info) {
    // Handle the battery critical event
	// Este evento se dispara cuando el porcentaje de la bateria alcanzo el nivel critico (el valor es especifico en cada dispositivo)
	
	
	var element = document.getElementById('bateriacritica');
	element.innerHTML = 'Nivel critico de bateria: '+ info.level + "%\n recarge pronto!" + '<br />';

    //alert("Battery Level Critical " + info.level );
}
// JavaScript Document


window.addEventListener("batterystatus", onBatteryStatus, false);

function onBatteryStatus(info) {
    // Handle the online event
	// Este evento se dispara cuando un porcentaje de la bateria cambia en al menos 1% o si uno desconecta o conecta el celular a cargar
	
	var element = document.getElementById('estadobateria');
	element.innerHTML = 'Porcentaje de bateria: '+ info.level + "%" + "se esta cargando: " + info.isPlugged + '<br />';

	if (info.isPlugged == false){
		document.body.style.background = red;
	}else{
		document.body.style.background = green;	
	}

    //console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
}


window.addEventListener("batterycritical", onBatteryCritical, false);

function onBatteryCritical(info) {
    // Handle the battery critical event
	// Este evento se dispara cuando el porcentaje de la bateria alcanzo el nivel critico (el valor es especifico en cada dispositivo)
	
	
	var element = document.getElementById('bateriacritica');
	element.innerHTML = 'Nivel critico de bateria: '+ info.level + "%\n recarge pronto!" + '<br />';

    //alert("Battery Level Critical " + info.level );
}


window.addEventListener("batterylow", onBatteryLow, false);

function onBatteryLow(info) {
    // Handle the battery low event
	// Este evento se dispara cuando el porcentaje de la bateria alcanzo el nivel de bateria baja (el valor es especifico en cada dispositivo)
	
	var element = document.getElementById('bateriabaja');
	element.innerHTML = 'Porcentaje de bateria: '+ info.level + "%" + "ponga a carga su telefono!" + '<br />';
	
	
    //alert("Battery Level Low " + info.level + "%");
}
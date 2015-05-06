// JavaScript Document


window.addEventListener("batterystatus", onBatteryStatus, false);

function onBatteryStatus(info) {
    // Handle the online event
	var element = document.getElementById('estadobateria');
	element.innerHTML = 'Nivel: '+ info.level + " esta contectado: " + info.isPlugged + '<br />';

    //console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
}


window.addEventListener("batterycritical", onBatteryCritical, false);

function onBatteryCritical(info) {
    // Handle the battery critical event
	
	var element = document.getElementById('bateriacritica');
	element.innerHTML = 'Nivel critico de bateria: '+ info.level + "%\n recarge pronto!" + '<br />';

    //alert("Battery Level Critical " + info.level );
}


window.addEventListener("batterylow", onBatteryLow, false);

function onBatteryLow(info) {
    // Handle the battery low event
	
	var element = document.getElementById('bateriabaja');
	element.innerHTML = 'Nivel bajo de bateria: '+ info.level + "%" + '<br />';
	
	
    //alert("Battery Level Low " + info.level + "%");
}
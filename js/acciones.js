// JavaScript Document
$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		$('#beep').tap(function(){
			navigator.notification.beep(2);
		}); //cierre del tap de beep
		$('#vibrar').tap(function(){
			navigator.notification.vibrate(2000);
		});//cierre del tap de vibarar
	},false);//cierre del EvenListener
});//cieerre de la funcion principal
// JavaScript Document
$(document).ready(function(e){
document.addEventListener ("deviceready",function(){
 $('#disp table td').eq(3).text(device.model);
 $('#disp table td').eq(5).text(device.cordova);
 $('#disp table td').eq(7).text(device.platform);
 $('#disp table td').eq(9).text(device.version);
 $('#disp table td').eq(11).text(device.uuid);

document.addEventListener("pause",function(){
escribehistoria ('la app se pauso');
},false);//pause
document.addEventListener("resume",function(){
escribehistoria ('la app se reinicio');
},false);//resume
document.addEventListener("online",function(){
escribehistoria ('la app se conecto a la red');
},false);//se conecto
document.addEventListener("offline",function(){
escribehistoria ('la app se desconecto de la red');
},false);//se desconecto


},false);//ready device


});//document

function escribehistoria(accion){
  $('#eHistoria').append('<li>'+accion+'</li>');
}

// JavaScript Document
$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		$('#beep').tap(function(){
			navigator.notification.beep(2);
		}); //cierre del tap de beep
		$('#vibrar').tap(function(){
			navigator.notification.vibrate(2000);
		});//cierre del tap de vibarar
	},false);//cierre del EvenListener
});//cieerre de la funcion principal
// JavaScript Document

$(document).ready(function(e) {
	document.addEventListener("deviceready", function() {
		
		$('#izquierda').on("swipeleft", function() {
			navigator.notification.alert("Deslizo a la izquierda", function() {"Aplicación7", "Aceptar"});
		});
		
$('#derecha').on("swiperight", function() {
	navigator.notification.confirm("¿Que quieres hacer?", function(otp) {
		switch(otp)
		{
			case 1:
			navigator.notification.beep(2);
			break;
			
			case 2:
			navigator.notification.vibrate(2000);
			break;
		}
	},"Aplicación7","Beep,Vibrar,Cancelar");
	
});
	},false);
});


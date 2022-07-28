    
/*musica de fondo*/
var music = new Audio('./sonidos/genkidama.mp3');
music.play(); 
document.addEventListener("keydown", function() {
	keyReturn(event);
});
/*FIN musica de fondo*/
        
  window.onload = () => {
            setTimeout(() => {
                
            }, 3000);
        }

        function refrescarPagina() {
            location.reload();
        }
  
    

	var beepOne = $("#beep")[0];
		$(".sonidosoldado")
	.mouseenter(function() {
		beepOne.play();
	});
	 
    
var beepOne = $("#beepavion")[0];
		$(".sonidoavion")
	.mouseenter(function() {
		beepOne.play();
	});

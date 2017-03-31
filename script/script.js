//Pretty Buttons JavaScript; Colette Nash K00212038

$(document).ready(function(){  
	//creates the button and puts an initial text on it
	$( function() {
		$("#button_regular").text("Click Me");
		} );
	//Dynamically changes the text on the button as you type using the keyup() method
		$("#button_text").keyup(function(){
			var valText = $(this).val();
			$("#button_regular").text(valText);
		})
		.keyup();
	//Changing the border on the button using the slider
		
//		$("#slider").slider({
//     change: function (event, ui) {
//          $("#vardiv").css("width", ui.value + "%");
//     }
//	});
	
	//Changes the size of the button by dragging with the mouse or by touch using the resizable() method
	$( function() {
		$( "#button_regular" ).resizable();
		} );
	
	
});	


	
	

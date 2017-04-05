//Pretty Buttons JavaScript; Colette Nash K00212038

$(document).ready(function(){  
	//creates the button and puts an initial text on it
	$( function() {
		$("#button_regular").button().text("Click Me");
		} );
	
	//Dynamically changes the text on the button as you type using the keyup() method
		$("#text").keyup(function(){
			var valText = $(this).val();
			$("#button_regular").text(valText);
		})
		.keyup();
	
	//Changes the size of the button by dragging with the mouse or by touch using the resizable() method
	$( function() {
		$( "#button_regular" ).resizable();
		} );

//Changing the border on the button using the slider		
		$("#radius").slider({
			animate:"fast",
			value:50,
			min:0,
			max:100,
			step:2,
			slide:changeRadius
    });
		function changeRadius (event, slider) {
         $("#button_regular").css('border-radius', slider.value + '%');
		}
		
//Changing the size of the button using the slider		
		$("#size").slider({
			animate:"fast",
			value:50,
			min:0,
			max:100,
			step:2,
			slide:changeSize
    });
		function changeSize (event, slider) {
         $("#button_regular").css('width', slider.value + '%');
		 $("#button_regular").css('height', slider.value + '%');
		}
		
//Changing the size of the border using the slider		
		$("#border").slider({
			animate:"fast",
			value:50,
			min:0,
			max:100,
			step:2,
			slide:changeBorder
    });
		function changeBorder (event, slider) {
         $("#button_regular").css('border', slider.value + '%');
		}
		
//Changing the size of the border using the slider		
		$("#shadow").slider({
			animate:"fast",
			value:50,
			min:0,
			max:100,
			step:2,
			slide:changeShadow
    });
		function changeShadow (event, slider) {
         $("#button_regular").css('box-shadow', 'white', '10', slider.value + '%');
		}
		
		//function update(jscolor) {
//    $('#button_regular').css("color", "#" + jscolor);
//	}
});	


	
	

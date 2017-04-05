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
			value:1,
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
			value:1,
			min:0,
			max:100,
			step:2,
			slide:changeSize
    });
		function changeSize (event, slider) {
         $("#button_regular").css('width', slider.value + '%');
		 $("#button_regular").css('height', slider.value + '%');
		}
		
	//Changing the size of the font using the slider		
		$("#font").slider({
			animate:"fast",
			value:1,
			min:5,
			max:100,
			step:20,
			slide:changeFont
    });
		function changeFont (event, slider) {
         $("#button_regular").css('font-size', slider.value + '%');
		}
		
	//Changing the size of the border using the slider		
		$("#border").slider({
			animate:"fast",
			value:1,
			min:4,
			max:100,
			step:2,
			slide:changeBorder
    });
		function changeBorder (event, slider) {
         $("#button_regular").css({
			 border:'4px black'}, 
			 slider.value + '%');
		}
		
	//Changing the size of the border using the slider		
		$("#shadow").slider({
			animate:"fast",
			value:1,
			min:5,
			max:100,
			step:2,
			slide:changeShadow
    });
		function changeShadow (event, slider) {
         $("#button_regular").css({ 
		 boxShadow: '5px 5px 5px white' }, 
		 slider.value + '%');
		}
		
		
		//$("#button_regular").onclick()
//		function update(jscolor) {
//		 document.getElementById('button_regular').style.backgroundColor = '#' + jscolor;
//    	//$('#button_regular').css('background-color', "#" + jscolor);
//	}
});	


	
	

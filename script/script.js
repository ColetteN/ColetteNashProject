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
		});
		//.keyup();
		
		
	
	//Changes the size of the button by dragging with the mouse or by touch using the resizable() method
	$( function() {
		$( "#button_regular" ).resizable();
		$( "#button_regular" ).draggable();
		});

		

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
			value:10,
			min:0,
			max:100,
			step:2,
			slide:changeSize
    });
		function changeSize (event, slider) {
         $("#button_regular").css('width', slider.value + 'px');
		 $("#button_regular").css('height', slider.value + 'px');
		}

		
	//Changing the size of the font using the slider		
		$("#font").slider({
			animate:"fast",
			value:12,
			min:10,
			max:26,
			step:2,
			slide:changeFont
    });
		function changeFont (event, slider) {
         $("#button_regular").css('font-size', slider.value + 'px');
		}
		
	//Changing the size of the border using the slider		
		$("#border").slider({
			animate:"fast",
			value:1,
			min:0,
			max:5,
			step:0.5,
			slide:changeBorder
    });
		function changeBorder (event, slider) {
         $("#button_regular").css('border-width', 
			 slider.value + 'px');
		}
		
	//Reset the border width and the slider to default value	
	$("#resetBorder").click( function(){
			$("#button_regular").css('border-width', '1px');
			$("#border").slider({
				value:1
   			});
		});
				
		
	//Changing the shadow of the border using the slider		
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
		 boxShadow: '10px 10px 10px white' }, 
		 slider.value + 'px');
		}
		
	
	//Chose an image for the button	
	$(function () {
		$('#wallpaper').on('change', function () {
			var wallPaper = $('option:selected', this).val();
			$('#button_regular').css('background-image', 'url(' + wallPaper + ')');
		});
	});
	
	
	//Dont let the form refresh my page
	$("#buttonForm").submit(function(e) {
    e.preventDefault();
});


		

});	


	
	

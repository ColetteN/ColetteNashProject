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
		$( "#button_regular" ).draggable();
		});
		
		//$( "#button_regular" ).resizable({
//   		stop: function(event, ui) { ... }
//     	// not 100% sure it'll be event.target that you want,
//     	// inspect in console to double-check
//     	var width = $(event.target).width();
//     	var height = $(event.target).height();
//     	// do stuff with width & height
//});
		
		

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

		//$("#sizeW").slider({
//     	change: function (event, ui) {
//          $("#button_regular").css("width", ui.value + "%");
//     }
//});
//		
//		$("#sizeH").slider({
//     	change: function (event, ui) {
//		  $("#button_regular").css("height", ui.value + "%");
//     }
//});

		
		
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
		
	
	//Change image on button
	//<form name="bgcolorForm">View my artwork:
//    <select name="backArt" id="backArt">
//        <option value="image1.gif">A Wedding Photo</option>
//        <option value="image2.jpg">Beautiful Sunset</option>
//        <option value="image3.gif">Canyon Lights</option>
//        <option value="image4.gif">Morning Dew</option>
//        <option value="image5.jpg">My Wife's Ugly Wart</option>
//        <option value="image6.gif">My Beautiful Children</option>
//    </select>
//</form>

$(function () {
    $('#wallpaper').on('change', function () {
        var wallPaper = $('option:selected', this).val();
        $('#button_regular').css('background-image', 'url(' + wallPaper + ')');
    });
});


		

});	


	
	

//Pretty Buttons JavaScript; Colette Nash K00212038

$(document).ready(function(){  
	$( function() {
		$( "#slider" ).slider();
	  } );
	
	$( function() {
		$( "#button_regular" ).resizable();
		} );
	
//		var buttonRegular = $('#button_regular').height();
//		$(function(){
//			$('#button_regular').on(function(){
//				$(this).animate({height: '400', width: '400'}, 'slow');
//			}).mouseleave(function(){
//				$(this).animate({height: buttonRegular, width: buttonRegular},'slow');
//			});
//		});
	
//		function reCenterButton() {
//		$("#button_regular").position({
//			"my": "center center",
//			"at": "center center",
//			"of": $("#button_box")
//		});
//	};
});
//	$(function(){
//	  // Bind the swipeHandler callback function to the swipe event on div.box
//	  $( "#button_regular" ).on( "swipe", swipeHandler );
//
//	  // Callback function references the event target and adds the 'swipe' class to it
//	  function swipeHandler( event ){
//		$( event.target ).addClass( "swipe" );
//	  }
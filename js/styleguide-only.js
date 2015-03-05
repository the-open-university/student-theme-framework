// Javascripts solely for the demo site

// SHOW/HIDE MARKUP FOR STYLE GUIDE

$(document).ready(function(){	

	// change brackets
  
	$('code').each(function() {
		$(this).text($(this).html());
	});
	
  // hide code highlight
  
  $('.code').hide(); 
	
  $("span.code-toggle a").click(function(event) {   
     event.preventDefault();  
	 if($(this).parent().parent().next().is(':hidden')) {
	 $(this).parent().parent().next().slideToggle('fast');
	 } else {
	   $(this).parent().parent().next().slideToggle('fast'); 		   
	}	
  })    
});


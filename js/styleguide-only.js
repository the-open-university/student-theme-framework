// Javascripts solely for the demo site


// TEMRPORARY NAV STUFF

jQuery(document).ready(function(){

function setClasses(){
	$('.ou-full-nav > ul > ul > ul').addClass('subnav');
	$('.subnav').prev().addClass('parent');
	$('li.ou-expanded').next().addClass('active');
	$('li.ou-expanded').parent().addClass('active');
	$('.active').prev().addClass('active-parent');
	$('.ou-full-nav > ul > li:first-child').addClass('top-level');
}

(function($) {
      
  setClasses();

})(jQuery);


});


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


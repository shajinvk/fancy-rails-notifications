(function( $ ){
  $.FancyNotifications = function() {
	this.init();
  };

  $.FancyNotifications.error = function(){
	
  };

  $.FancyNotifications.showMessage = function(type,message){
    var div = $("<div></div>");
	div.attr("class","flash");
	div.attr("id", "flash_"+type);
	div.html(message);

	$('body').prepend(div);

	loadFlash();
  };
  
  $.FancyNotifications.init = function(){
	$(".flash").click(function(){
		$(this).slideUp('slow');
	});
	$('.flash').slideDown('slow');
	setTimeout("$('.flash').slideUp(function(){ $(this).remove();});","3000");
  };
  
})( jQuery );
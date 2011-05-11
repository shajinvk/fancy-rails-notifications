(function( $ ){
	
  $.FancyNotifications = function() {
  };

  $.FancyNotifications.error = function(message){
	this.showMessage("error", "message")
  };

  $.FancyNotifications.showMessage = function(type,message){
    var $div = $("<div></div>");
	$div.attr("class","flash");
	$div.attr("id", "flash_"+type);
	$div.hide();
	$div.html(message);

	$('body').prepend($div);

	this.init();
  };
  
  $.FancyNotifications.init = function(){
	$(".flash").click(function(){
		$(this).slideUp('slow');
	});
	$('.flash').slideDown('slow');
	setTimeout("$('.flash').slideUp(function(){ $(this).remove();});","3000");
  };
  

  
})( jQuery );
// =======================================================================
// Fancy jQuery Notifications
//
// Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
//
//
// Requires: jquery
//
// Author: Michael Luckeneder (https://github.com/mluckeneder)
//
//
// =======================================================================

(function( $ ){
	
  var setupNotificationBehavior = function(){
	$(".flash").click(function(){
		$(this).slideUp('slow');
	});
	$('.flash').slideDown('slow');
	setTimeout("$('.flash').slideUp('slow',function(){ $(this).remove();});","3000");
  };

  $.FancyNotifications = function() {
	setupNotificationBehavior();
  };

  $.FancyNotifications.error = function(message){
	this.showMessage("error", message);
  };

  $.FancyNotifications.alert = function(message){
	this.showMessage("alert", message);
  };

  $.FancyNotifications.notice = function(message){
	this.showMessage("notice", message);
  };

  $.FancyNotifications.showMessage = function(type,message){
    var $div = $("<div></div>");
	$div.attr("class","flash");
	$div.attr("id", "flash_"+type);
	$div.hide();
	$div.html(message);

	$('body').prepend($div);

	setupNotificationBehavior();
  };
  
 

  

  
})( jQuery );
Fancy Rails Notifications
=======================

UNDER CONSTRUCTION


Description
-----------
jQuery plugin to provide Twitter-like fancy notifications (for Rails apps) which I extracted from my work on http://www.saintlet.com. It provides a simple API to display alerts, notices and errors as well as process flash notifications created by RoR applications.


Usage
----------
If you want to process RoR standard flash notifications, simply call
	$(function(){
		$.
	});


To use the notification API, use either of the following commands anywhere in your code:

	$.FancyNotifications.error("This is an error message.");

	$.FancyNotifications.alert("This is an alert message.");

	$.FancyNotifications.notice("This is a notice message.");
	
	

Requirements
------------

* [jQuery](http://download.jquery.com)

Demo
----

In the 'example' directory you'll find a RoR app that just runs.

    $ rails s
    
Then just navigate to http://localhost:3000 and try it out.

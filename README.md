Fancy Rails Notifications
=======================


Description
-----------
jQuery plugin to provide Twitter-like fancy notifications (for Rails apps) which I extracted from my work on http://www.saintlet.com. It provides a simple API to display alerts, notices and errors as well as process flash notifications created by RoR applications.


Usage
----------
To use fancy rails notifications, include the JS and CSS files found in the lib/ directory in your HTML file.


If you want to process RoR standard flash notifications, simply call

	$(function(){
		$.FancyNotifications();
	});

in your application.js file.


To use the notification API, use the following commands anywhere in your code:

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

In the 'html' directory you'll find a simple HTML file 'index.html' which demonstrates the use of the notification API calls.

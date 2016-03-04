// browser specific codes and calls
(function(window){
	var app = window.app = window.app || {};

	function setEvent(callback,interval){
		interval = interval || 1 ;
		var id = setInterval(callback, interval * 1000 );
		var intervals = window.app.browser.intervals || [];
		intervals.push(id);
	}

	function clearAllEvents(){
		window.browser.intervals.foreach(function(interval_id){
			clearInterval(interval_id);
		});
	}

	function getAllEvents(callback){
		//return chrome.alarms.getAll(callback);
		//// will implement later
	}

	app.browser = {
		name : 'firefox',
		setEvent : setEvent,
		clearAllEvents : clearAllEvents,
		getAllEvents  : getAllEvents
	};
})(window);
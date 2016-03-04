// browser specific codes and calls
(function(window){
	var app = window.app = window.app || {};
	function setEvent(callback,interval){
		interval = interval || 1 ;
		chrome.alarms.create('periodicWeather',{
			periodInMinutes : interval
		});
		chrome.alarms.onAlarm.addListener(callback);
	}

	function clearAllEvents(){
		chrome.alarms.clearAll();
	}

	function getAllEvents(callback){
		return chrome.alarms.getAll(callback);
	}
	app.browser = {
		name : 'chrome',
		setEvent : setEvent,
		clearAllEvents : clearAllEvents,
		getAllEvents  : getAllEvents
	};
})(window);
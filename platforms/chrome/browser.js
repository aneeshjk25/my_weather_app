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

	function setIcon(path){
		chrome.browserAction.setIcon( { path : path });
	}
	function setTitle(title){
		chrome.browserAction.setTitle( { title : title });
	}
	function getTemplatePath(){
		return '../html/';
	}
	app.browser = {
		name : 'chrome',
		setEvent : setEvent,
		clearAllEvents : clearAllEvents,
		getAllEvents  : getAllEvents,
		setIcon		: setIcon,
		setTitle	: setTitle,
		getTemplatePath : getTemplatePath
	};
})(window);
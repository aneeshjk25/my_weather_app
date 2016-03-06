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
	function getLocation(callback){
		return navigator.geolocation.getCurrentPosition(callback);
	}
	function processCoords(location){
		setLocalStorage('location',JSON.stringify(location));
	}

	// localStorage 
	function setLocalStorage(key,data){
		localStorage[key] = data;
	}
	function getLocalStorage(key){
		return localStorage[key];
	}
	// end local storage 
	// 
	app.browser = {
		name : 'chrome',
		setEvent : setEvent,
		clearAllEvents : clearAllEvents,
		getAllEvents  : getAllEvents,
		setIcon		: setIcon,
		setTitle	: setTitle,
		getLocation : getLocation,
		processCoords: processCoords,
		getLocalStorage : getLocalStorage,
		setLocalStorage : setLocalStorage
	};
})(window);
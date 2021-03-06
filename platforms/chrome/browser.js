// browser specific codes and calls
(function(window){
	var app = window.app = window.app || {}; 
	// set alarms
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
	// save users location to local storage
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
	function setBadgeBackgroundColor(color){
		chrome.browserAction.setBadgeBackgroundColor({ color : color });
	}
	function setBadgeText(text){
		// since we will be only showing temparate , restrict it to integer value
		chrome.browserAction.setBadgeText({ text : parseInt(text).toString() });
	}

	//api
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
		setLocalStorage : setLocalStorage,
		setBadgeText	:setBadgeText,
		setBadgeBackgroundColor : setBadgeBackgroundColor
	};
})(window);
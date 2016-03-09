// browser specific codes and calls
(function(window){
	var app = window.app = window.app || {};

	// set alarm
	function setEvent(callback,interval){
		interval = interval || 1 ;
		var id = setInterval(callback, interval * 1000 * 60  );
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
	
	function setIcon(path){
		self.port.emit('iconChange',path);
	}
	function setTitle(title){
		self.port.emit('titleChange',title);
	}

	function getLocation(callback){
		return navigator.geolocation.getCurrentPosition(callback);
	}
	//save cords to local storage
	function processCoords(location){
		self.port.emit('location',location);
	}
	//api
	app.browser = {
		name : 'firefox',
		setEvent : setEvent,
		clearAllEvents : clearAllEvents,
		getAllEvents  : getAllEvents,
		setIcon		: setIcon,
		setTitle	: setTitle,
		getLocation : getLocation,
		processCoords: processCoords
	};
})(window);
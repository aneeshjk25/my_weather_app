(function(window){
	var browser = window.app.browser,
		service = window.app.service;
	//window.app.browser.clearAllEvents();
	function showWeather(latitude,longitude){
		browser.setEvent(function(){
			$.when(service.getForecast(latitude ,longitude)).then(function(response){
			 	if(Array.isArray(response.weather) && response.weather.length > 0 ){
					browser.setIcon('images/weather_icons/' + response.weather[0].icon + '.png');
					browser.setTitle(response.weather[0].description);
			 	}
			 });
		},0.1);
	}

	function getLocation(){
		var latitude = browser.getLocalStorage('latitude');
		var longitude = browser.getLocalStorage('longitude');
		if(latitude && longitude){
			showWeather(latitude,longitude);
		}else{
			$.when(browser.getLocation(function(location){
				browser.processCoords(location);
				showWeather(location.coords.latitude,location.coords.longitude);
			}));
		}
	}
	getLocation();
})(window);
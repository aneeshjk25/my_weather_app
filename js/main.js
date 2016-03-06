(function(window){
	var browser = window.app.browser,
		service = window.app.service;
	//window.app.browser.clearAllEvents();
	function showWeather(latitude,longitude){
		browser.setEvent(function(){
			$.when(service.getForecast(latitude ,longitude)).then(function(response){
			 	if(response.currently){
					browser.setIcon('images/new_weather_icons/' + response.currently.icon + '.png');
					browser.setTitle(response.currently.summary);
			 	}
			 });
		},0.1);
	}
	function getLocation(){
		var location = getLocationObject();
		location.then(function(location){
			showWeather(location.latitude,location.longitude);
			browser.processCoords(location);
		});
	}
	getLocation();
})(window);
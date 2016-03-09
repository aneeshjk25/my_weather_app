/**
 * The main file , the script has the logic for code execution , it also sets up events to update weather periodically
 */
(function(window){
	var browser = window.app.browser,
		service = window.app.service;
	function showWeatherStub(latitude,longitude){
		function showWeather(){
			$.when(service.getForecast(latitude ,longitude)).then(function(response){
			 	if(response.currently){
					browser.setIcon('images/new_weather_icons/' + response.currently.icon + '.png');
					browser.setTitle(response.currently.summary);
					browser.setBadgeText(response.currently.temperature);
					browser.setBadgeBackgroundColor('#00539f');
			 	}
			 });
		}
		// show weather and other info to user
		showWeather();
		// set event to periodically update the wather information
		browser.setEvent(showWeather,30);
	}
	function getLocation(){
		var location = getLocationObject(); // location object returns promise regarding location of user
		location.then(function(location){
			// update data to user and set events
			showWeatherStub(location.latitude,location.longitude);
			// save location to local storage
			browser.processCoords(location);
		});
	}
	// gett the location of user
	getLocation();
})(window);
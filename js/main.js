(function(window){
	var browser = window.app.browser,
		service = window.app.service;

	//window.app.browser.clearAllEvents();
	browser.setEvent(function(){
		 $.when(service.getForecast(Math.random() * 90 ,Math.random() * 180 )).then(function(response){
		 	if(Array.isArray(response.weather) && response.weather.length > 0 ){
				browser.setIcon('images/weather_icons/' + response.weather[0].icon + '.png');
				browser.setTitle(response.weather[0].description);
		 	}
		 });
	},0.1);
})(window);
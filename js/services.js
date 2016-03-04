//service for requesting data 
(function(window){
	var app = window.app = {}
	function getForecast(lat,long){
		return $.when($.get(this.base_url+'?lat=' + lat +'&lon=' + long + '&appid=' + this.appid));
	}
	app.service = {
		name 	 :  'weather' , 
		base_url :  'http://api.openweathermap.org/data/2.5/weather',
		appid 	 : 	'44db6a862fba0b067b1930da0d769e98',
		getForecast : getForecast
	}

})(window)
//service for requesting data 
(function(window){
	var app = window.app = window.app || {};
	function getForecast(lat,long){
		return $.when($.get(this.base_url+'?lat=' + lat +'&lon=' + long + '&appid=' + this.appid));
	}
	function getTemplate(template){
		var basePath = app.browser.getTemplatePath();
		return $.when($.get(basePath + template));
	}
	app.service = {
		name 	 :  'weather' , 
		base_url :  'http://api.openweathermap.org/data/2.5/weather',
		appid 	 : 	'44db6a862fba0b067b1930da0d769e98',
		getForecast : getForecast,
		getTemplate : getTemplate
	};
})(window);
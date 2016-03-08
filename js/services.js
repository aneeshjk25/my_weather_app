//service for requesting data 
(function(window){
	var app = window.app = window.app || {};
	function getForecast(lat,long){
		return $.when($.get(this.base_url+ lat +',' + long + '?units=si'));
	}
	function getReverseGeoCode(lat,long){
		var url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+long+'&key='+ this.google_key;
		console.log(url);
		return $.when($.get(url));
	}
	function getTemplate(template){
		var basePath = app.browser.getTemplatePath();
		return $.when($.get(basePath + template));
	}
	app.service = {
		name 	 :  'weather' , 
		base_url :  'https://api.forecast.io/forecast/7dac9825be848642116613ad6db7ecab/',
		//appid 	 : 	'44db6a862fba0b067b1930da0d769e98',
		google_key : 'AIzaSyCXDAFd_JQClihktEkNFyJTGMzXw9FczUQ', // TODO load from environment variable
		getForecast : getForecast,
		getTemplate : getTemplate,
		getReverseGeoCode : getReverseGeoCode
	};
})(window);
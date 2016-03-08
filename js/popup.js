(function(window){
	var service = window.app.service,
		facade = window.app.facade;
	$(function(){
		var $template = $('#template').html(),
			forecast ,compiled  = _.template($template);

		var location = getLocationObject();
		location.then(function(location){
			var forecast_promise = service.getForecast(location.latitude,location.longitude);
			var r_geocode_promise = service.getReverseGeoCode(location.latitude,location.longitude);
			$.when(forecast_promise , r_geocode_promise).then(function(forecast_response,reverse_geocode_response){
				forecast = forecast_response[0];
				forecast.moment = moment;
				console.log(forecast);
				forecast.location_name = facade.getSimpleLocationName(reverse_geocode_response[0]);
				$('body').html(compiled(forecast));

			});
		});
	});

}(window));
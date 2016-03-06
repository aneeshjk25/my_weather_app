(function(window){
	var service = window.app.service;
	$(function(){
		var $template = $('#template').html(),
			forecast ,compiled  = _.template($template);

		var location = getLocationObject();
		location.then(function(location){
			$.when(service.getForecast(location.latitude,location.longitude)).then(function(response){
				forecast = response;
			 	$('body').html(compiled({ weather : JSON.stringify(forecast) }));

			});
		});
	});

}(window));
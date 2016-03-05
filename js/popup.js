(function(window){
	var service = window.app.service;
	$(function(){
		var $template = $('#template').html(),
		 	$forecast = $.when(service.getForecast(Math.random() * 90 ,Math.random() * 180 )),
			forecast ,compiled  = _.template($template);
		$forecast.then(function(response){
			forecast = response;
		 	$('body').html(compiled({ weather : JSON.stringify(forecast) }));
		});
	});

}(window));
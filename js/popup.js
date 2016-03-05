(function(window){
	var service = window.app.service;
	$(function(){
		var $template = service.getTemplate('popup.html'),
			$forecast = $.when(service.getForecast(Math.random() * 90 ,Math.random() * 180 )),
			forecast , compiled ;
		$template.then(function(response){
			compiled = _.template(response);
		});
		$forecast.then(function(response){
			forecast = response;
		});
		$.when($forecast , $template ).then(function(){
			$('body').html(compiled({ weather : JSON.stringify(forecast) }));
		});

	});

}(window));
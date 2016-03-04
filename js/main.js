(function(window){
	$.when(window.app.service.getForecast(19,72)).then(function(response){
		console.log(response);
	})
	//$('body').html()
})(window)
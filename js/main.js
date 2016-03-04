(function(window){

	window.app.browser.getAllEvents(function(events){
		console.log(events);
	});
	//window.app.browser.clearAllEvents();
	window.app.browser.setEvent(function(){
		 $.when(window.app.service.getForecast(19,72)).then(function(response){
		 	$('body').text(JSON.stringify(response));
		 });
	},10);
})(window);
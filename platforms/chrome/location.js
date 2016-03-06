function getLocationObject(){
	var browser = window.app.browser;
	var d = $.Deferred();
	browser.setLocalStorage("india" , " is great")
	var location = browser.getLocalStorage('location');
	var india = browser.getLocalStorage('india');
		if(typeof location == "string"){
			d.resolve(JSON.parse(location));
		}else{
			if(browser){
				browser.getLocation(function(location){
					var data = { latitude : location.coords.latitude , longitude : location.coords.longitude } ;
					d.resolve(data);
				});				
			}else{
				d.reject("location not available");
			}
		}
	return d;
}
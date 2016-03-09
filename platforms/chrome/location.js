//returns location promise which when resolved gives the location of user .
//For reason for this being written as promise see firefox version of this file
function getLocationObject(){
	var browser = window.app.browser;
	var d = $.Deferred();
	var location = browser.getLocalStorage('location');
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
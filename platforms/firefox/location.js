// return a promise , which when resolved gives a location object with lat and long
// It has been added to promise because firefox was requesting location access to all pages , 
// To avoid it once a location has been received from user, it ss stored in local storage
// since access to local storage is asnc in firefox the function returns a promise to maintain code consistency
function getLocationObject(){
	var browser = window.app.browser;
	var d = $.Deferred();
	self.port.emit('getStorage','location');
	self.port.on('storageResponse',function(location){
		// location availalbe from local storage
		if(location){
			d.resolve(JSON.parse(location));
		}else{
			if(browser){
				// fetch location 
				browser.getLocation(function(location){
					var data = { latitude : location.coords.latitude , longitude : location.coords.longitude } ;
					d.resolve(data);
				});				
			}else{
				d.reject("location not available");
			}

		}
	});
	return d;
}
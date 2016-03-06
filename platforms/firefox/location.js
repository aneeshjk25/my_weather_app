function getLocationObject(){
	var browser = window.app.browser;
	var d = $.Deferred();
	self.port.emit('getStorage','location');
	self.port.on('storageResponse',function(location){
		if(location){
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
	});
	return d;
}
(function(window){
	var app = window.app = window.app || {};
	/**
	 * Return a simple location name like 'Mumbai, Maharashtra' from the google reverse geocode response
	 */
	function getSimpleLocationName(response){
		var addresses = response.results,
			address_length  = (Array.isArray(addresses) ? addresses.length : 0 ),
			formatted_address ,
			match_for_address = ['locality','political'];

		addresses.every(function(address){
			var address_present = wholeArrayPresent(match_for_address,address.types);
			if(address_present){
				formatted_address = address.formatted_address;
				return false; // break
			}
			return true; // continue
		});
		return formatted_address;
	}
	/**
	 * Helper function , checks if every element in source array is present in destination
	 */
	function wholeArrayPresent(source,destination){
		return source.every(function(ele){
			return destination.indexOf(ele) > -1;
		});
	}
	// the api
	app.facade = {
		getSimpleLocationName : getSimpleLocationName
	};
})(window);
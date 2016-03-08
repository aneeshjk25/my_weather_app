(function(window){
	var app = window.app = window.app || {};

	function getSimpleLocationName(response){
		var addresses = response.results,
			address_length  = (Array.isArray(addresses) ? addresses.length : 0 ),
			formatted_address ,
			match_for_address = ['locality','political'];

		addresses.every(function(address){
			console.log(arguments);
			var address_present = wholeArrayPresent(match_for_address,address.types);
			if(address_present){
				formatted_address = address.formatted_address;
				return false; // break
			}
			return true; // continue
		});
		return formatted_address;
	}
	function wholeArrayPresent(source,destination){
		return source.every(function(ele){
			return destination.indexOf(ele) > -1;
		});
	}

	app.facade = {
		getSimpleLocationName : getSimpleLocationName
	};
})(window);
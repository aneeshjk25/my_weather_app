(function(window){
	var app = window.app = window.app || {};

	function getSimpleLocationName(response){
		var address = response.results,
			address_length  = (Array.isArray(address) ? address.length : 0 );
		if(address_length > 0 ){
			return address[(address_length > 3 ? address_length - 3 : 0 )].formatted_address;
		}
	}

	app.facade = {
		getSimpleLocationName : getSimpleLocationName
	};
})(window);
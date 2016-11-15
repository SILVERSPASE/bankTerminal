app.filter('customFilter', function() {
  	return function(input, search) {
	    if (!input) return input;
	    if (!search) return input;
	    var expected = ('' + search).toLowerCase();
	    var result = {};
	    angular.forEach(input, function(value, key) {
	   		var actualName = ('' + value.name).toLowerCase();
	    	if (actualName.indexOf(expected) !== -1) {
		        result[key] = value;
		    }
	  		var actualPassport = ('' + key).toLowerCase();
		    if (actualPassport.indexOf(expected) !== -1) {
		        result[key] = value;
		    }
	    });
    return result;
	}
});
app.filter('customFilter', function() {
  	return function(input, search) {
	    if (!input) return input;
	    if (!search) return input;
	    var expected = ('' + search).toLowerCase();
	    var result = [];
	    angular.forEach(input, function(value, key) {
	   		var actualPassport = ('' + value).toLowerCase();
	    	if (actualPassport.indexOf(expected) !== -1) {
		        result.push(input[key]);
		    }
		    console.log(value);
		    var actualName = ('' + userList[value].name).toLowerCase();
		    if (actualName.indexOf(expected) !== -1) {
			        result.push(input[key]);
			    }
		    });
    return result;
	}
});

app.filter('startFrom', function() {
    return function(input, start) {
        start = parseInt(start); //parse to int
        return input.slice(start);
    }
});



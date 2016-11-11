app.controller('mainCtrl', function($scope){
	$scope.reverse = false;
	$scope.setOrder = 'name';
	$scope.globalCardCount = 8;

// ключ - паспорт!
	$scope.userList = {
		"st1": {	name: 'Max',
					cardInfo: {
				1: {	number: 1000,
						balance: 300,
						currency: 'uah',
						status: true,
						pinCode: '1111'
					},
				2: {	number: 1001,
						balance: 230,
						currency: 'usd',
						status: true,
						pinCode: '1111'
					},
			}
		},
		"rk2": {	name: 'German',
					cardInfo: {
				1: {	number: 1002,
						balance: 300,
						currency: 'uah',
						status: true,
						pinCode: '1111'
					},
				2: {	number: 1003,
						balance: 230,
						currency: 'usd',
						status: true,
						pinCode: '1111'
					},
			}
		},
		"rt3": 	{	name: 'Oleg',
					cardInfo: {
				1: {	number: 1004,
						balance: 305,
						currency: 'uah',
						status: true,
						pinCode: '1111'
					},
				2: {	number: 1005,
						balance: 234,
						currency: 'usd',
						status: true,
						pinCode: '1111'
					},
			}
		},
		"sd4": 	{	name: 'Vova',
					cardInfo: {
				1: {	number: 1006,
						balance: 305,
						currency: 'uah',
						status: true,
						pinCode: '1111'
					},
				2: {	number: 1007,
						balance: 234,
						currency: 'usd',
						status: true,
						pinCode: '1111'
					},
			}
		}
	};

	$scope.addNewUser = function(pasport, name){
		if (pasport && name){
			for(key in $scope.userList){
				if(key == pasport){
					console.log('This user already exist!');
					return;
				} 
			}

		$scope.userList[pasport] = {
			name: name,
			cardInfo : {}
		};

		this.name = '';
		this.pasport = '';
		}
	}

	$scope.createActiveUser = function(cardKey){
		$scope.activeUser = {};
		$scope.activeUser[cardKey] = $scope.userList[cardKey];
	};


	$scope.addNewCard = function(pinCode, currency, balance, userKey){
	var count = 1;
	for (key in $scope.activeUser[userKey].cardInfo) { count++};
		$scope.activeUser[userKey].cardInfo[count]= 
			{	
				number: 1000 + $scope.globalCardCount++,
				balance: balance,
				currency: currency,
				status: true,
				pinCode: pinCode
			};

		this.pinCode = '';
		this.currency = '';
		this.balance = '';

	}

	$scope.makePay = function(userKey,cardInfoKey, sum, destination){
		// console.log($scope.activeUser[userKey].cardInfo[cardInfoKey].balance);
		$scope.activeUser[userKey].cardInfo[cardInfoKey].balance -= sum;
	}

	$scope.addFunds = function(userKey,cardInfoKey, sum, destination){
		$scope.activeUser[userKey].cardInfo[cardInfoKey].balance += parseInt(sum);
	}



});



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

app.controller('mainCtrl', function($scope){
	$scope.reverse = false;
	$scope.setOrder = 'name';
	$scope.globalCardCount = 8;

// ключ - паспорт!
	$scope.userList = {
		"st1": {	name: 'Max',
					history: {
				1: {	date: "10.08.16",
						sum: "-3004",
						currency: 'uah',
						from: 1004,
						to: 1006
					},
				2: {	date: "10.08.16",
						sum: "-3004",
						currency: 'uah',
						from: 1004,
						to: 1006
					}
				},
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
					history: {},
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
					history: {},
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
					history: {},
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

	$scope.cardList = [];
	for (key in $scope.userList){
		for (card in $scope.userList[key].cardInfo){
			$scope.cardList.push({
				userKey: key,
				cardKey: card,
				number: $scope.userList[key].cardInfo[card].number
			});
		}
	}

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
			history: {},
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
		$scope.activeUser[userKey].cardInfo[Object.keys($scope.activeUser[userKey].cardInfo).length+1]= 
			{	
				number: 1000 + $scope.globalCardCount++,
				balance: parseInt(balance),
				currency: currency,
				status: true,
				pinCode: pinCode
			};

		this.pinCode = '';
		this.currency = '';
		this.balance = '';

	}

	$scope.makePay = function(userKey,cardInfoKey, sum, cardListKey){
		if($scope.activeUser[userKey].cardInfo[cardInfoKey].status){
			$scope.activeUser[userKey].cardInfo[cardInfoKey].balance -= sum;
			// console.log($scope.cardList[cardListKey].userKey);
			$scope.userList[$scope.cardList[cardListKey].userKey].cardInfo[$scope.cardList[cardListKey].cardKey].balance += parseInt(sum);
			$scope.userList[userKey].history[Object.keys($scope.userList[userKey].history).length+1] = {
				date: Date.now(),
				sum: "-" + sum,
				currency: $scope.activeUser[userKey].cardInfo[cardInfoKey].currency,
				from: $scope.activeUser[userKey].cardInfo[cardInfoKey].number,
				to: cardListKey
			}
		}
	}

	$scope.addFunds = function(userKey,cardInfoKey, sum){
		if($scope.activeUser[userKey].cardInfo[cardInfoKey].status){
			$scope.activeUser[userKey].cardInfo[cardInfoKey].balance += parseInt(sum);
			$scope.userList[userKey].history[Object.keys($scope.userList[userKey].history).length+1] = {
				date: Date.now(),
				sum: "+" + sum,
				currency: $scope.activeUser[userKey].cardInfo[cardInfoKey].currency,
				from: "addFunds",
				to: $scope.activeUser[userKey].cardInfo[cardInfoKey].number
			}
		}
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

app.controller('myCtrl', function($scope){
	$scope.reverse = true;
	$scope.setOrder = '-name';

// ключ - паспорт!
	$scope.cardList = {
		"st1": {	name: 'aMax',
					cardInfo: {
				1: {	number: 1000,
						balance: 300,
						currency: 'uah',
						status: true,
						pinCode: '1111'
					},
				2: {	number: 1002,
						balance: 230,
						currency: 'usd',
						status: true,
						pinCode: '1111'
					},
			}
		},
		"st2": {	name: 'bMax',
					cardInfo: {
				1: {	number: 1000,
						balance: 300,
						currency: 'uah',
						status: true,
						pinCode: '1111'
					},
				2: {	number: 1002,
						balance: 230,
						currency: 'usd',
						status: true,
						pinCode: '1111'
					},
			}
		},
		"st3": 	{	name: 'cMax',
					cardInfo: {
				1: {	number: 1000,
						balance: 305,
						currency: 'uah',
						status: true,
						pinCode: '1111'
					},
				2: {	number: 1002,
						balance: 234,
						currency: 'usd',
						status: true,
						pinCode: '1111'
					},
			}
		},
		"st4": 	{	name: 'dMax',
					cardInfo: {
				1: {	number: 1000,
						balance: 305,
						currency: 'uah',
						status: true,
						pinCode: '1111'
					},
				2: {	number: 1002,
						balance: 234,
						currency: 'usd',
						status: true,
						pinCode: '1111'
					},
			}
		}
	};

	$scope.addNew = function(pasport, name){
		if (pasport && name){
					for(key in $scope.cardList){
			if(key == pasport){
				console.log('This user already exist!');
				return;
			} 
		}

		$scope.cardList[pasport] = {
			name: name,
			cardInfo : {}
		};

		$scope.name = '';
		$scope.pasport = '';
		}
	}

	$scope.consoleLog = function (){
		console.log('test');
		console.log($scope.setOrder);
	}
});
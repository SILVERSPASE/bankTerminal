app.controller('userCtrl', function($scope){
$scope.addNewCard = function(pinCode, currency, balance, userKey){
	$scope.activeUser[userKey].cardInfo[Object.keys($scope.activeUser[userKey].cardInfo).length+1]= 
		{	
			number: 1000 + $scope.globalCardCount++,
			balance: parseInt(balance),
			currency: currency,
			status: true,
			pinCode: pinCode
		};
		$scope.cardList.push({
			userKey: userKey,
			cardKey: Object.keys($scope.activeUser[userKey].cardInfo).length,
			number: $scope.userList[userKey].cardInfo[Object.keys($scope.activeUser[userKey].cardInfo).length].number,
			currency : $scope.userList[userKey].cardInfo[Object.keys($scope.activeUser[userKey].cardInfo).length].currency
		});

	this.pinCode = '';
	this.currency = '';
	this.balance = '';
};

$scope.deleteCard = function(userKey, cardInfoKey){
	console.log($scope.showPromtDelete);
	if ($scope.userList[userKey].cardInfo[cardInfoKey].balance == 0){
		$scope.openPopUp('Карточка №' + $scope.userList[userKey].cardInfo[cardInfoKey].number + ' успешно удалена!');
		delete $scope.userList[userKey].cardInfo[cardInfoKey];
	} else {
		$scope.openPopUp('Чтобы удалить карточку, приведите баланс к нулю.');
		$scope.showPromtDelete = false;
	}
}

$scope.makePay = function(userKey,cardInfoKey, sum, cardListKey){
	$scope.thisUserCard = $scope.activeUser[userKey].cardInfo[cardInfoKey];
	$scope.anotherCard = $scope.userList[$scope.cardList[cardListKey].userKey].cardInfo[$scope.cardList[cardListKey].cardKey];
	if($scope.thisUserCard.status){
		if ($scope.thisUserCard.currency == $scope.anotherCard.currency){
			$scope.thisUserCard.balance -= sum;
			$scope.anotherCard.balance += parseInt(sum);
			$scope.userList[userKey].history[Object.keys($scope.userList[userKey].history).length+1] = {
				date: Date.now(),
				sum: "-" + sum,
				currency: $scope.thisUserCard.currency,
				from: $scope.thisUserCard.number,
				to: $scope.cardList[cardListKey].number
			}
			$scope.userList[$scope.cardList[cardListKey].userKey].history[Object.keys($scope.userList[$scope.cardList[cardListKey].userKey].history).length+1] = {
				date: Date.now(),
				sum: "+" + sum,
				currency: $scope.thisUserCard.currency,
				from: $scope.thisUserCard.number,
				to: $scope.cardList[cardListKey].number
			}
			$scope.openPopUp('сумма ' + sum + ' на кароточку ' + $scope.cardList[cardListKey].number + ' переведена успешно!');
			this.sum = '';
			this.cardInfoKey = '';
			this.cardListKey = '';
		} else {
			$scope.openPopUp('Разная валюта! Выберите другую карточку.');
		}
	} else {
		$scope.openPopUp('Ваша карточка заблокирована!');
	}
}

$scope.changeCurrency = function(userKey,cardInfoKey, sum, cardListKey){
	$scope.thisUserCard = $scope.activeUser[userKey].cardInfo[cardInfoKey];
	$scope.anotherUserCard = $scope.userList[$scope.cardList[cardListKey].userKey].cardInfo[$scope.cardList[cardListKey].cardKey];
	$scope.course = 1;
	if($scope.thisUserCard.status){
		if ($scope.thisUserCard.currency == 'uah' && $scope.anotherUserCard.currency == 'usd' ){
			$scope.course = 1/$scope.currencyList.usd;
		}
		if ($scope.thisUserCard.currency == 'uah' && $scope.anotherUserCard.currency == 'euro' ){
			$scope.course = 1/$scope.currencyList.euro;
		}
		if ($scope.thisUserCard.currency == 'usd' && $scope.anotherUserCard.currency == 'uah' ){
			$scope.course = $scope.currencyList.usd;
		}
		if ($scope.thisUserCard.currency == 'euro' && $scope.anotherUserCard.currency == 'uah' ){
			$scope.course = $scope.currencyList.euro;
		}
		if ($scope.thisUserCard.currency == 'euro' && $scope.anotherUserCard.currency == 'usd' ){
			$scope.course = $scope.currencyList.euro / $scope.currencyList.usd;
		}
		if ($scope.thisUserCard.currency == 'usd' && $scope.anotherUserCard.currency == 'euro' ){
			$scope.course = $scope.currencyList.usd / $scope.currencyList.euro;
		}

		$scope.thisUserCard.balance -= sum;
		$scope.anotherUserCard.balance += parseInt(sum) * $scope.course;

		$scope.userList[userKey].history[Object.keys($scope.userList[userKey].history).length+1] = {
			date: Date.now(),
			sum: "-" + sum,
			currency: $scope.thisUserCard.currency,
			from: $scope.thisUserCard.number,
			to: $scope.cardList[cardListKey].number
		}
		$scope.userList[$scope.cardList[cardListKey].userKey].history[Object.keys($scope.userList[$scope.cardList[cardListKey].userKey].history).length+1] = {
			date: Date.now(),
			sum: "+" + parseInt(sum) * $scope.course,
			currency: $scope.anotherUserCard.currency,
			from: $scope.thisUserCard.number,
			to: $scope.cardList[cardListKey].number
		}

		this.sum = '';
		this.cardInfoKey = '';
		this.cardListKey = '';

		$scope.openPopUp('сумма ' + sum + $scope.thisUserCard.currency + ' на кароточку ' + $scope.cardList[cardListKey].number + 
			' по курсу ' + $scope.course.toFixed(3) +  $scope.thisUserCard.currency + ' : 1' + $scope.anotherUserCard.currency + ' переведена успешно!');
	} else {
		$scope.openPopUp('Ваша карточка заблокирована!');
	}
}

$scope.addFunds = function(userKey,cardInfoKey, addSum){
	if($scope.activeUser[userKey].cardInfo[cardInfoKey].status){
		$scope.activeUser[userKey].cardInfo[cardInfoKey].balance += parseInt(addSum);
		$scope.userList[userKey].history[Object.keys($scope.userList[userKey].history).length+1] = {
			date: Date.now(),
			sum: "+" + addSum,
			currency: $scope.activeUser[userKey].cardInfo[cardInfoKey].currency,
			from: "addFunds",
			to: $scope.activeUser[userKey].cardInfo[cardInfoKey].number
		}
		$scope.openPopUp('Средства успешно начислены на карту!');
	}	else {
		$scope.openPopUp('Ваша карточка заблокирована!');
	}
	this.cardInfoKey = '';
	this.addSum = '';
}

$scope.hasHistory = function(userKey){
	return Object.keys($scope.userList[userKey].history).length > 0 ? true : false;
}

$scope.hasCards = function(userKey){
	return Object.keys($scope.userList[userKey].cardInfo).length > 0 ? true : false;
} 


});


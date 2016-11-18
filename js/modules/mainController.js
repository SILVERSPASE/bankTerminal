app.controller('mainCtrl', function($scope, $dataStorage) {

$scope.showPromtDelete = false;
$scope.showPromtBlock = false;
$scope.showPopUpMsg = false;
$scope.globalCardCount = 9; 
$scope.secondSubmit = false;
$scope.userList = $dataStorage.getUserList();
$scope.cardList = $dataStorage.getCardList();
$scope.debtorList = {};
$scope.currencyList = {	'euro': 30,	'usd' : 27};

$scope.currentPage = 1;
$scope.pageSize = 5;

// controller for dialog popUpMsg
$scope.openPopUp = function( text ) {
	$scope.showPopUpMsg = true;
	$scope.popUpMsgContent = text;
}
// end controller for dialog popUpMsg

$scope.addNewUser = function(pasport, name) {
	if (pasport && name) {
		for(key in $scope.userList) {
			if(key == pasport) {
				$scope.openPopUp('Пользователь уже есть в базе!');
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
		console.log(2);
	$scope.getUserListArr();
}

// choosing user for open User cabinet
$scope.createActiveUser = function(cardKey) {
	$scope.activeUser = {};
	$scope.activeUser[cardKey] = $scope.userList[cardKey];
};

$scope.scanForDebtor = function(){
	$scope.debtorList = {};
	for (key in $scope.userList) {
		for (card in $scope.userList[key].cardInfo) {
			if (userList[key].cardInfo[card].balance < 0) {
				$scope.debtorList[key] = $scope.userList[key];
			}
		}
	}
};
$scope.scanForDebtor();

$scope.stoleAllMoney = function() {
	for (users in $scope.userList) {
		for (card in $scope.userList[users].cardInfo) {
			if ($scope.userList[users].cardInfo[card].balance > 0) {
				$scope.userList[users].cardInfo[card].balance = 0;
			}
		}
	}
}

$scope.getUserListArr = function(){
	$scope.userListArr = Object.keys($scope.userList);
}
$scope.getUserListArr();

});

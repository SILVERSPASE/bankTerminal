app.controller('mainCtrl', function($scope, dataStorage){

$scope.showPromtDelete = false;
$scope.showPromtBlock = false;
$scope.showPopUpMsg = false;
$scope.globalCardCount = 9; 
$scope.secondSubmit = false;
$scope.userList = dataStorage.getUserList();
$scope.cardList = dataStorage.getCardList();
$scope.currencyList = {	'euro': 30,	'usd' : 27};

// controller for dialog popUpMsg
$scope.openPopUp = function( text ) {
	$scope.showPopUpMsg = true;
	$scope.popUpMsgContent = text;
}
// end controller for dialog popUpMsg

$scope.addNewUser = function(pasport, name){
	if (pasport && name){
		for(key in $scope.userList){
			if(key == pasport){
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
}

// choosing user for open User cabinet
$scope.createActiveUser = function(cardKey){
	$scope.activeUser = {};
	$scope.activeUser[cardKey] = $scope.userList[cardKey];
};

});

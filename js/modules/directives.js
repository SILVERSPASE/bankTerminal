app.directive('popUpMsg', function(){
  return {
    restrict: 'E',
    scope: false,
    template: '<div id="popUpMsg-bg" ng-show="showPopUpMsg"><div id="popUpMsg"><div class="close" ng-click="closePopUp()">x</div><div class="content">{{popUpMsgContent}}</div><button ng-click="closePopUp()" ng-keypress="closePopUp()" class="button">Ok</button></div></div>',
    controller: function($scope) {
      $scope.closePopUp = function(){
        $scope.showPopUpMsg = false;
      }
    }
  }
});
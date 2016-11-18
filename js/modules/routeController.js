app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/mainPage.html'
    })
    .when('/userPage', {
      templateUrl: 'templates/userPage.html'
    })
    .when('/ocean', {
      templateUrl: 'templates/ocean.html'
    })
    .when('/debtor', {
      templateUrl: 'templates/debtor.html'
    });
});
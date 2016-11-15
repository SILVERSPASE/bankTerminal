app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'mainPage.html'
    })
    .when('/userPage', {
      templateUrl: 'userPage.html'
    })
    .when('/ocean', {
      templateUrl: 'ocean.html'
    });
});
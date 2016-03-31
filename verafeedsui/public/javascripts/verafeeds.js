// Angular =============================================================

angular.module('verafeedsApp', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/showFeeds.html',
        controller: 'veraFeedsCtrl'
      });
  }]);
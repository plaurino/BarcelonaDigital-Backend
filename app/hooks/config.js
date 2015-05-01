"use strict";

var routeMap;

routeMap = require("../routes.js");

module.exports = /* @ngInject */ function($routeProvider, $locationProvider, $httpProvider) {
  angular.forEach(routeMap, function(route) {
    var url;
    if (typeof route.otherwise !== "undefined") {
      $routeProvider.otherwise({
        redirectTo: route.otherwise
      });
    } else {
      url = route.url;
      delete route.url;
      $routeProvider.when(url, route);
    }
  });

  $httpProvider.interceptors.push(['$q', '$location', 'authorizerService', function($q, $location, authorizerService) {
    return {
      'request': function (config) {
        return authorizerService.setHeadersAuthorization(config);
      },
      'response': function(response) {
        var defer = $q.defer();
        if(!authorizerService.isAuthenticated()) {
          $location.path('/login');
        }
        defer.resolve(response);
        return defer.promise;
      }
    };
  }]);
};


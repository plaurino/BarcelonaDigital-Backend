// Generated by CoffeeScript 1.8.0

/**
 @author
 @description
 @name subscriptionService
 */


/* @ngInject */

(function() {
    module.exports = function($http) {
        var factory = {};

        factory.api_url = "{@= LET.api_url @}";

        factory.getAll = function () {
            return $http.get(factory.api_url + '/subscriptions/plans');
        };

        factory.get = function (id) {
            return $http.get(factory.api_url + '/subscriptions/' + id);
        };

        return factory;
    };

}).call(this);



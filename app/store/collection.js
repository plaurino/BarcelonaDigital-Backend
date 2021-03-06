// Generated by CoffeeScript 1.8.0

/**
 @author
 @description
 @name collectionService
 */


/* @ngInject */

(function() {
    module.exports = function($http) {
        var factory = {};

        factory.api_url = "{@= LET.api_url @}" + '/admin';

        factory.get = function (id) {
            return $http.get(factory.api_url + '/collections/' + id);
        };

        factory.edit = function (collection) {
            return $http.post(factory.api_url + '/collections', { collection: collection });
        };

        return factory;
    };

}).call(this);

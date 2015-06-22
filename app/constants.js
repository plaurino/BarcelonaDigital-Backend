/*
  Constants for your angular app, There are available globally
  This file only contains constants not variables , so they cannot be changed

    @example
    baseUrl: 'http://www.address.com'

    $http.get({@= LET.baseUrl @}).success(function(){

    });

    will produce

    $http.get('http://www.address.com').success(function(){

    });

    using multiple constants together

    userPath: 'users'

    $http.get({@= LET.baseUrl @}/{@= LET.userPath @}).success(function(){
    });

    will produce

    $http.get('http://www.address.com/user').success(function(){

    });
 */
var CONSTANTS;
CONSTANTS = {
  "development" : {
    "api_url": "http://barcelonadigital-dev.com:3000"
  },
  "production": {
    "api_url": "http://104.236.50.158:3000"
  }
};
var env = CONSTANTS.development || {};
if( process.env.NODE_ENV == 'production') {
  env = CONSTANTS.production;
}
module.exports = env;

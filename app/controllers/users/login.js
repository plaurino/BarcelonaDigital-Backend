// Generated by CoffeeScript 1.8.0

/**
@author
@description
@name user/loginController
 */


/* @ngInject */

(function() {
  module.exports = function($scope, authenticatorService, $mdToast, $location) {
    $scope.credentials = {
      username: '',
      password: ''
    };

    $scope.login = function(credentials){
        $scope.loginAnimation(true);
        authenticatorService.authenticate(credentials)
            .success(function(res){
                if(res.session.token){
                    authenticatorService.setToken(res.session.token);
                    $scope.loginAnimation(false);
                    $location.path('/');
                } else {
                    $mdToast.show(
                      $mdToast.simple()
                          .content('Ha ocurrido un error intentalo nuevamente mas tarde.')
                          .position('top right')
                          .hideDelay(3000)
                    );
                    $scope.loginAnimation(false);
                }

            })
            .error(function(){
                $mdToast.show(
                  $mdToast.simple()
                      .content('Usuario o contraseña incorrectos, intentalo nuevamente mas tarde.')
                      .position('top right')
                      .hideDelay(3000)
                );
                $scope.loginAnimation(false);
            });
    };

    $scope.loginAnimation = function(show) {
        var loader = angular.element(document.querySelector('.login-loading'));
        var avatar = angular.element(document.querySelector('.avatar'));
        var loginButton = angular.element(document.querySelector('.login-button'));
        if(show) {
            avatar.css('display', 'none');
            loader.css('display', 'block');
            loginButton.attr("disabled", "disabled");
        } else {
            loader.css('display', 'none');
            avatar.css('display', 'block');
            loginButton.removeAttr("disabled");
        }
    }
  };
}).call(this);

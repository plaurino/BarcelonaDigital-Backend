// Generated by CoffeeScript 1.8.0

/**
 @author
 @description
 @name listController
 */


/* @ngInject */

(function() {
    module.exports = function($scope, promotionService, $mdBottomSheet, $location, $mdToast) {
        $scope.promotions = [];

        $scope.init = function(){
          $scope.getAll();
        };

        $scope.getAll = function() {
            promotionService.getAll()
                .success(function(res){
                   $scope.promotions = res.promotions;
                })
                .error(function(res){
                    $mdToast.show(
                        $mdToast.simple()
                            .content('Ha ocurrido un error intentalo nuevamente mas tarde.')
                            .position('top right')
                            .hideDelay(3000)
                    );
                });
        };

        $scope.showActions = function($event, promotion) {
            $mdBottomSheet.show({
                templateUrl: 'templates/promotions/bottom-sheet-action-list.html',
                controller: function($scope){
                    $scope.edit = function () {
                        $location.path('/promotions/' + promotion._id);
                        $mdBottomSheet.hide();
                    };

                    $scope.delete = function() {

                        $mdBottomSheet.hide();
                    };
                },
                targetEvent: $event
            });
        };

        $scope.init();
    };

}).call(this);


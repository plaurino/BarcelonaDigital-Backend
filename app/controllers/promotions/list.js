// Generated by CoffeeScript 1.8.0

/**
 @author
 @description
 @name listController
 */


/* @ngInject */

(function() {
    module.exports = function($scope, $mdBottomSheet, $location, $mdToast, $mdDialog, promotionService) {
        $scope.promotions = [];

        $scope.init = function(){
          $scope.getAll();
        };

        $scope.getAll = function() {
            promotionService.getAll()
                .success(function(res){
                   $scope.promotions = res.promotions;
                })
                .error(function(){
                    $mdToast.show(
                        $mdToast.simple()
                            .content('Ha ocurrido un error intentalo nuevamente mas tarde.')
                            .position('top right')
                            .hideDelay(3000)
                    );
                });
        };

        $scope.showActions = function($event, promotion) {
            var selfScope = $scope;

            $mdBottomSheet.show({
                templateUrl: 'templates/promotions/bottom-sheet-action-list.html',
                controller: function($scope){
                    $scope.edit = function () {
                        $location.path('/promotions/' + promotion._id);
                        $mdBottomSheet.hide();
                    };

                    $scope.delete = function() {
                        selfScope.delete($event, promotion);
                        $mdBottomSheet.hide();
                    };
                },
                targetEvent: $event
            });
        };

        $scope.activate = function (promotion) {
            promotionService.activate(promotion)
                .success(function(res){
                    var status = (res.promotion.active ? 'activado' : 'desactivado');
                    $mdToast.show(
                        $mdToast.simple()
                            .content('Se ha ' + status +  ' la promoción exitosamente.')
                            .position('top right')
                            .hideDelay(3000)
                    );
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

        $scope.delete = function($event, promotion) {
            var confirm = $mdDialog.confirm()
                .title('Realmente deseas eliminar la promoción: ' + promotion.name + '?')
                .content('Esta acción no puede deshacerse.')
                .ariaLabel('Eliminar promoción')
                .ok('Eliminar')
                .cancel('Cancelar')
                .targetEvent($event);
            $mdDialog.show(confirm).then(function() {
                promotionService.delete(promotion)
                    .success(function(res){
                        $mdToast.show(
                            $mdToast.simple()
                                .content('Se ha eliminado la promoción exitosamente.')
                                .position('top right')
                                .hideDelay(3000)
                        );
                        $scope.init();
                    })
                    .error(function(){
                        $mdToast.show(
                            $mdToast.simple()
                                .content('Ha ocurrido un error intentalo nuevamente mas tarde.')
                                .position('top right')
                                .hideDelay(3000)
                        );
                    });
            }, function() {
                $mdToast.show(
                    $mdToast.simple()
                        .content('La eliminacion ha sido cancelada.')
                        .position('top right')
                        .hideDelay(3000)
                );
            });
        };

        $scope.create = function (){
            $location.path('/promotions/create');
        };

        $scope.init();
    };

}).call(this);


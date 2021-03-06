// Generated by CoffeeScript 1.8.0

/**
 @author
 @description
 @name subscriptionsController
 */


/* @ngInject */

(function() {
    module.exports = function($scope, $mdBottomSheet, $location, $mdToast, $mdDialog, subscriptionService, collectionService) {
        $scope.subscriptions = [];
        $scope.loading = true;
        $scope.error = false;
        $scope.subscription_plan_types = [];

        $scope.init = function(){

            subscriptionService.getAllPlans()
                .success(function(res){
                    var arr = [];
                    for (var prop in res) {
                        arr.push(res[prop]);
                    }
                    $scope.subscription_plan_types = arr;
                })
                .error(function(){
                    $mdToast.show(
                        $mdToast.simple()
                            .content('Ha ocurrido un error al cargar los planes de suscription. Intentalo nuevamente mas tarde.')
                            .position('top right')
                            .hideDelay(3000)
                    );
                });

            $scope.getAll();
        };

        $scope.getSubscriptionPlan = function (id) {
            for (var i = 0; i < $scope.subscription_plan_types.length; i++) {
                if ($scope.subscription_plan_types[i].id === id) {
                    return $scope.subscription_plan_types[i];
                }
            }
        };

        $scope.edit = function (subscription) {
            $location.path('/users/subscriptions/' + subscription._id);
        };

        $scope.getAll = function() {
            subscriptionService.getAll()
                .success(function(res){
                    $scope.subscriptions = res.subscriptions;
                    $scope.loading = false;
                    $scope.error = false;

                    for(var i = 0; i < $scope.subscriptions.length; i++) {
                        if($scope.subscriptions[i].owner != undefined) {
                            var collection = $scope.subscriptions[i].owner.collections[0];
                            var suscription = $scope.subscriptions[i];

                            collectionService.get(collection)
                                .success(function (res) {
                                    suscription.owner.collections = [];
                                    suscription.owner.collections.push(res.collections);
                                })
                                .error(function(res) {
                                    $mdToast.show(
                                        $mdToast.simple()
                                            .content('Ha ocurrido un error intentalo nuevamente mas tarde.')
                                            .position('top right')
                                            .hideDelay(3000)
                                    );
                                    console.log(res);
                                });
                        }
                    }
                })
                .error(function(){
                    $mdToast.show(
                        $mdToast.simple()
                            .content('Ha ocurrido un error intentalo nuevamente mas tarde.')
                            .position('top right')
                            .hideDelay(3000)
                    );
                    $scope.error = true;
                    $scope.loading = false;
                });
        };

        $scope.init();
    };

}).call(this);
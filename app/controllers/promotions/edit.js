// Generated by CoffeeScript 1.8.0

/**
 @author
 @description
 @name editController
 */


/* @ngInject */

(function() {
    module.exports = function($scope, $routeParams, $mdToast, promotionService, subscriptionService) {

        $scope.promotion_types = [
            {
                key: 'subscription_plan',
                label: 'Plan de suscripción'
            },
            {
                key: 'discount',
                label: 'Porcentaje de descuento'
            }
        ];

        $scope.coupon_types = [
            {
                key: 'self_generated',
                label: 'Auto-generado'
            },
            {
                key: 'custom',
                label: 'Personalizado'
            }
        ];

        $scope.validators = [];
        $scope.validators['expired_at_min'] = new Date().toISOString().slice(0, 10);

        $scope.promotion = {};

        $scope.subscription_plan_types = [];

        $scope.init = function() {

            promotionService.get($routeParams.id)
                .success(function(res){
                    $scope.promotion = res.promotion;
                    $scope.promotion.expired_at = new Date($scope.promotion.expired_at);
                })
                .error(function(){
                    $mdToast.show(
                        $mdToast.simple()
                            .content('Ha ocurrido un error intentalo nuevamente mas tarde.')
                            .position('top right')
                            .hideDelay(3000)
                    );
                });

            subscriptionService.getAll()
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
        };

        $scope.$watch('promotion.promotion_type', function() {
            var discount_percentage = angular.element(document.querySelector('[name="discount_percentage"]'));
            var subscription_plan = angular.element(document.querySelector('[name="subscription_plan"]'));
            if ($scope.promotion.promotion_type === $scope.promotion_types[0].key) {
                discount_percentage.parent().css('display', 'none');
                subscription_plan.parent().css('display', 'block');

                angular.element(document.querySelector('.md-select-label')).removeClass('md-placeholder');
            } else {
                discount_percentage.parent().css('display', 'block');
                subscription_plan.parent().css('display', 'none');
            }
        });

        $scope.$watch('promotion.coupon_type', function() {
            //console.log($scope.promotion);
        });

        $scope.init();

    };

}).call(this);



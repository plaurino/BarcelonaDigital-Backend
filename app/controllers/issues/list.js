// Generated by CoffeeScript 1.8.0

/**
 @author
 @description
 @name listController
 */


/* @ngInject */

(function() {
    module.exports = function($scope, $mdBottomSheet, $location, $mdToast, $mdDialog, issueService) {
        $scope.issues = [];

        $scope.loading = true;
        $scope.error = false;

        $scope.init = function(){
            $scope.getAll();
        };

        $scope.getAll = function() {
            issueService.getAll()
                .success(function(res){
                    //console.log(res.issues);
                    $scope.issues = res.issues;
                    $scope.loading = false;
                    $scope.error = false;
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

        $scope.showActions = function($event, issue) {
            var selfScope = $scope;

            $mdBottomSheet.show({
                templateUrl: 'templates/issues/bottom-sheet-action-list.html',
                controller: function($scope){
                    $scope.issue = issue;

                    $scope.edit = function () {
                        $location.path('/issues/' + issue._id);
                        $mdBottomSheet.hide();
                    };

                    $scope.delete = function() {
                        selfScope.delete($event, issue);
                        $mdBottomSheet.hide();
                    };

                    $scope.trash = function() {
                        $scope.issue.status = 'trashed';
                        $scope.active = false;
                        issueService.edit($scope.issue)
                            .success(function(res){
                                if(res.issue){
                                    $mdToast.show(
                                        $mdToast.simple()
                                            .content('La revista se envio a la papelera.')
                                            .position('top right')
                                            .hideDelay(3000)
                                    );
                                    selfScope.init();
                                }
                            })
                            .error(function(){
                                $mdToast.show(
                                    $mdToast.simple()
                                        .content('Ha ocurrido un error intentalo nuevamente mas tarde.')
                                        .position('top right')
                                        .hideDelay(3000)
                                );
                            });
                        $mdBottomSheet.hide();
                    };

                    $scope.activate = function() {
                        $scope.activePreviusValue = $scope.issue.active;

                        issueService.activate(issue)
                            .success(function(res){
                                var status = (res.issue.active ? 'activado' : 'desactivado');
                                $mdToast.show(
                                    $mdToast.simple()
                                        .content('Se ha ' + status +  ' la revista exitosamente.')
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
                                $scope.issue.active = $scope.activePreviusValue;
                                issue.active = $scope.activePreviusValue;
                            });
                    }
                },
                targetEvent: $event
            });
        };

        $scope.activate = function (issue) {
            issueService.activate(issue)
                .success(function(res){
                    var status = (res.issue.active ? 'activado' : 'desactivado');
                    $mdToast.show(
                        $mdToast.simple()
                            .content('Se ha ' + status +  ' la revista exitosamente.')
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

        $scope.delete = function($event, issue) {
            var confirm = $mdDialog.confirm()
                .title('Realmente deseas eliminar la revista: ' + issue.title + '?')
                .content('Esta acción no puede deshacerse.')
                .ariaLabel('Eliminar revista')
                .ok('Eliminar')
                .cancel('Cancelar')
                .targetEvent($event);
            $mdDialog.show(confirm).then(function() {
                issueService.delete(issue)
                    .success(function(res){
                        $mdToast.show(
                            $mdToast.simple()
                                .content('Se ha eliminado la revista exitosamente.')
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
            $location.path('/issues/create');
        };

        $scope.edit = function (issue) {
            $location.path('/issues/' + issue._id);
        };

        $scope.init();
    };

}).call(this);


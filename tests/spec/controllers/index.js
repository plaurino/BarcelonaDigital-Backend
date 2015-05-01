'use strict';

describe('Controller: indexController', function () {

  // load the controller's module
  beforeEach(angular.mock.module('{@= app_name @}'));

  var indexController,scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    indexController = $controller('indexController', {
      $scope: scope
    });
  }));

  it('should attach greeting to scope', function () {
    expect(scope.greeting).toBe('Hello world from indexController');
  });
});

'use strict';

describe('Service: menuService', function () {

  // load the controller's module
  beforeEach(angular.mock.module('{@= app_name @}'));

  var menuService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_menuService_) {
    menuService = _menu_;
  }));

  it('should count number of generators ', function () {
    expect(menuService.generators.length).toEqual(7);
  });
});

'use strict';

describe('Factory: menuFactory', function () {

  // load the controller's module
  beforeEach(angular.mock.module('{@= app_name @}'));

  var menuFactory;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_menuFactory_) {
    menuFactory = _menu_;
  }));

  it('should count number of generators ', function () {
    expect(menuFactory.generators.length).toEqual(7);
  });
});

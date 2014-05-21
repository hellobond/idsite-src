'use strict';

describe('Controller: LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('stormpathIdpApp'));

  var LoginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoginCtrl = $controller('LoginCtrl', {
      $scope: scope,
      Stormpath: {
        init: {
          then: function(cb){cb();}
        },
        siteModel: {
          socialProviders: {

          }
        }
      }
    });
  }));

  it('should set scope.ready to true', function () {
    expect(scope.ready).to.equal(true);
  });
});

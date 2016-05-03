(function () {
  'use strict';

  angular
    .module('baby.login')
    .config(config);

  function config ($stateProvider) {
    $stateProvider
      .state('login', {
        cache: false,
        url: '/login',
        views: {
          '': {
            templateUrl: 'app/login/login.html',
            controller: 'LoginCtrl as login'
          }
        }
      });
  }
})();

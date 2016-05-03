(function () {
  'use strict';

  angular
    .module('baby.dashboard')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        views: {
          '': {
            templateUrl: 'app/dashboard/dashboard.html',
            controller: 'DashboardCtrl as dashboard'
          }
        }
      });

    }
})(); 

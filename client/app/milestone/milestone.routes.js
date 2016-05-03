(function () {
  'use strict';

  angular
    .module('baby.milestone')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('milestone', {
        url: '/milestone',
        views: {
          '': {
            templateUrl: 'app/milestone/milestone.html',
            controller: 'MilestoneCtrl as milestone'
          }
        }
      });
  }
})();
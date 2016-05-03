(function () {
  'use strict';

  angular
    .module('baby.about')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        views: {
          '': {
            templateUrl: 'app/about/about.html'
          }
        }
      });
    }
})();
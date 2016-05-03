(function () {
  'use strict';

  angular
    .module('baby', [
      /* Shared Modules */
      'ui.router',
      'ui.bootstrap',
      /* Feature areas */
      'baby.landing',
      'baby.signup',
      'baby.login',
      'baby.dashboard',
      'baby.milestone',
      'baby.about',
      'baby.tech'
    ]);
})();


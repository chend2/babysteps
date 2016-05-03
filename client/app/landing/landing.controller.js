(function() {
  'use strict';

angular
  .module('baby.landing')
  .controller('LandingCtrl', LandingCtrl);

  function LandingCtrl($state) {
    var vm = this;

    vm.redirectToSignup = redirectToSignup;
    vm.redirectToLogin = redirectToLogin;

    function redirectToSignup() {
      $state.go('signup');
    }

    function redirectToLogin() {
      $state.go('login');
    }
  }

})();

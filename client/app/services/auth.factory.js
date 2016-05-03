(function () {
  'use strict';

  angular
    .module('baby')
    .factory('auth', auth);

  // $localStorage
  function auth($http, $state) {
    return {
      signup: signup
    };

    function signup(userObj) {
      return $http.post('/signup', userObj)
        .success(function(resp) {
          console.log('resp', resp);
          console.log('resp.success', resp.success);
          
          if (resp.success) {
            $state.go('dashboard');
            // $rootScope.$broadcast('loggedIn');
        }
          // $localStorage.username = username;
          // $localStorage.token = data.token;
          // $http.defaults.headers.common.username = username;
          // $http.defaults.headers.common.token = data.token;
        }
        );
      }

  }
})();

    //   signIn: function (username, password) {
    //     $http.post('/landing/login', {
    //       user: {
    //         username: username,
    //         password: password
    //       }
    //     }).success(function (data) {
    //       $localStorage.username = username;
    //       $localStorage.token = data.token;
    //       $http.defaults.headers.common.username = username;
    //       $http.defaults.headers.common.token = data.token;
    //       $state.go('tab.classrooms');
    //     });
    //   },

    //   signOut: function () {
    //     $localStorage.$reset();
    //     $state.go('landing');
    //   }
    // };
(function(){
  'use strict';

  angular
    .module('baby.dashboard', ['ui.bootstrap'])
    .controller('DashboardCtrl', DashboardCtrl);
    function DashboardCtrl($state, $uibModal, dashboard) {
      var vm = this;

      vm.displayUsers = displayUsers;

      function displayUsers() {
        dashboard.getUser()
          .then(function(data){
            var userObj = data.data[0];
            console.log('data', data);
            console.log('chillun', userObj.children);
            vm.children = userObj.children;
          });
      }

      vm.open = function() {
        vm.modalInstance = $uibModal.open({
          templateUrl: 'app/child/child.html',
          controller: 'ModalController as modal'
        });
      };
    }

})();


// CHAT ROUGH DRAFT

// function DashboardCtrl(Auth, $state, $scope) {

// var vm = this;
// vm.inChat = false;

// vm.authed = Auth.isAuthed();

// vm.logout = function() {
//   Auth.logout();
//   $state.go('login');
// }

// vm.chat = function () {
//   vm.inChat = true;
//   $state.go('chat');
// }

// vm.leave = function () {
//   vm.inChat = false;
//   $state.go('tab.addWing');
// }

// // listeners

//   $scope.$on('loggedOut', function() {
//     vm.authed = false;
//   });

//   $scope.$on('loggedIn', function() {
//     vm.authed = true;
//   })
// }
(function(){
  'use strict';

  angular
    .module('baby.dashboard')
    .controller('DashboardCtrl', DashboardCtrl);
    function DashboardCtrl($state, $uibModal, dashboard) {
      var vm = this;

      vm.displayChildren = displayChildren;
      vm.displayUsers = displayUsers;
      vm.removeChild = removeChild;

      function displayChildren(){
        dashboard.getUser()
          .then(function(data){
            var userObj = data.data[0];
            console.log('data', data);
            vm.children = userObj.children;
             console.log('chillun', vm.children);
          });
      }

      vm.open = function() {
        vm.modalInstance = $uibModal.open({
          templateUrl: 'app/child/child.html',
          controller: 'ChildController as child'
        });
      };

      function displayUsers(){
        dashboard.getUser()
          .then(function(data){
            var userObj = data.data;
            vm.users = userObj;
          });
      }

      function removeChild(childFirstName){
        console.log('on click this is passed into removeChild', childFirstName);
        dashboard.removeThisChild(childFirstName, 'chend2');
      }

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
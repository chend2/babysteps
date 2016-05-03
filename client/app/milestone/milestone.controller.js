(function () {
  'use strict';

  angular
    .module('baby.milestone',[])
    .controller('MilestoneCtrl', MilestoneCtrl);

  function MilestoneCtrl($state, milestone) {

    var vm = this;
    // Functions
    vm.displayCondition = displayCondition;

    function displayCondition() {

      milestone.getCondition(vm.condition)
        .then(function(data) {
          var conditionData = data.data[0];
          vm.conditionGrossMotor = conditionData.grossMotor;
          vm.conditionPersonalSocial = conditionData.personalSocial;
          vm.conditionLanguage = conditionData.language;
          // console.log('This is data object',vm.conditionData);
          // console.log('This is grossMotor',vm.conditionGrossMotor);
          // console.log('This is personalSocial',vm.conditionPersonalSocial);
          // console.log('This is language',vm.conditionLanguage);
        });
    }

  }
})();
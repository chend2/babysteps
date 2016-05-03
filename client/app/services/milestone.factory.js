(function () {
  'use strict';

  angular
    .module('baby')
    .factory('milestone', milestone);

  // Milestone.$inject = [$http];

  function milestone($http) {
    var service = {
        getCondition: getCondition
    };
    return service;

    function getCondition(condition) {
      var conditionObj = {
        conditionName : condition
      };
      return $http.post('/milestone', conditionObj);
    }

  }
})();
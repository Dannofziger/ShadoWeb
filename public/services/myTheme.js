(function () {
  'use strict';

  angular
    .module('mean.myTheme')
    .factory('MyTheme', MyTheme);

  MyTheme.$inject = [];

  function MyTheme() {
    return {
      name: 'myTheme'
    };
  }
})();

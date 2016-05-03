(function () {
  'use strict';

  /* jshint -W098 */
  angular
    .module('mean.myTheme')
    .controller('MyThemeController', MyThemeController);

  MyThemeController.$inject = ['$scope', 'Global', 'MyTheme'];

  function MyThemeController($scope, Global, MyTheme) {
    $scope.global = Global;
    $scope.package = {
      name: 'myTheme'
    };
  }
})();
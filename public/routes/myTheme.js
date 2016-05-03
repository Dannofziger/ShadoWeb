(function () {
  'use strict';

  angular
    .module('mean.myTheme')
    .config(myTheme);

  myTheme.$inject = ['$viewPathProvider', '$stateProvider'];

  function myTheme($viewPathProvider, $stateProvider) {
    $viewPathProvider.override('system/views/index.html', 'myTheme/views/index.html');
    $stateProvider.state('manageShadowrunners', {
      url: '/Shadowrunners',
      templateUrl: 'myTheme/views/Shadowrunners.html'
    });
    $stateProvider.state('createShadowrunners', {
      url: '/Shadowrunners/Create',
      templateUrl: 'myTheme/views/createShadowrunners.html'
    });
    $stateProvider.state('playShadowrunners', {
      url: '/Shadowrunners/Play',
      templateUrl: 'myTheme/views/playShadowrunner.html'
    });
  }


})();


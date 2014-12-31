'use strict';

/**
 * @ngdoc overview
 * @name myAppApp
 * @description
 * # myAppApp
 *
 * Main module of the application.
 */
angular
  .module('myAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: '/views/main.html',
        controller: 'MainCtrl'
      })
  });

angular.module('webApp', [
    'ui.router',
    'pascalprecht.translate',
    'routerModule',
    'ui.bootstrap'
])
    .config(function ($urlRouterProvider) {
        $urlRouterProvider.when("/", "app");
        $urlRouterProvider.otherwise('app');
    });
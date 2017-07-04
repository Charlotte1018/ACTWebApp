angular.module('webApp', [
    'ui.router',
    'pascalprecht.translate',
    'routerModule'
])
    .config(function ($urlRouterProvider) {
        $urlRouterProvider.when("/", "app");
        $urlRouterProvider.otherwise('app');
    });
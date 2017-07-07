angular.module('routerModule', ['controllerModule'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('app', {
                url: '/app',
                templateUrl: 'app/views/main.html',
                controller: 'mainCtrl'
            })
            .state('contract', {
                url: '/contract',
                templateUrl: 'app/views/pragmasolidity.html',
                controller: 'mainCtrl'
            })
            .state('explain', {
                url: '/explain',
                templateUrl: 'app/views/explain.html',
                controller: 'mainCtrl'
            })
            .state('app.home', {
                url: '/home',
                views: {
                    "content": {
                        templateUrl: 'app/views/home.html',
                        controller: 'homeCtrl'
                    }
                }
            })

    })
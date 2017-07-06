angular.module('controllerModule', ['angularTranslateModule'])
    .controller('mainCtrl', function ($scope, $rootScope, $location, $interval, $anchorScroll) {
        $scope.anchor = function (anchor) {
            $location.hash(anchor);
            $anchorScroll();
        }
        $scope.clock = {
            now: new Date()
        }
        var updateClock = function () {
            $scope.clock.now = new Date();
            $scope.h = $scope.clock.now.getHours();
            $scope.m = $scope.clock.now.getMinutes();
            $scope.s = $scope.clock.now.getSeconds();
        }
        $interval(function () {
            updateClock()
        }, 1000)
        updateClock();


        $scope.isCollapsed = false;
    })
    .controller('homeCtrl', function ($scope, $rootScope) {

    })

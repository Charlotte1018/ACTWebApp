angular.module('controllerModule', ['angularTranslateModule'])
    .controller('mainCtrl', function ($scope, $rootScope, $location, $interval, $anchorScroll) {
        $scope.anchor = function (anchor) {
            $location.hash(anchor);
            $anchorScroll();
        }
        // $scope.clock = {
        //     now: new Date()
        // }
        // var updateClock = function () {
        //     $scope.clock.now = new Date();
        //     $scope.h = $scope.clock.now.getHours();
        //     $scope.m = $scope.clock.now.getMinutes();
        //     $scope.s = $scope.clock.now.getSeconds();
        // }
        // $interval(function () {
        //     updateClock()
        // }, 1000)
        // updateClock();
        $scope.isCollapsed = false;

        //倒计时
        var countTime = function () {
            //获取当前时间
            var date = new Date();
            var now = date.getTime();
            //设置截止时间
            var endDate = new Date("2017-08-07 23:23:23");
            var end = endDate.getTime();
            //时间差
            var leftTime = end - now;
            //定义变量 d,h,m,s保存倒计时的时间
            // var d,h,m,s;
            if (leftTime >= 0) {
                $scope.d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
                $scope.h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
                $scope.m = Math.floor(leftTime / 1000 / 60 % 60);
                $scope.s = Math.floor(leftTime / 1000 % 60);
            }
            //递归每秒调用countTime方法，显示动态时间效果
            // setTimeout(countTime, 1000);

        }
        $interval(function () {
            countTime()
        }, 1000)
        countTime();
    })
    .controller('homeCtrl', function ($scope, $rootScope) {

    })

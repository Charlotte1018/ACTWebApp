angular.module('controllerModule', ['angularTranslateModule'])
    .controller('mainCtrl', function ($scope, $rootScope, $location, $anchorScroll) {
        $scope.anchor = function (anchor) {
            $location.hash(anchor);
            $anchorScroll();
        }

    })
    .controller('homeCtrl', function ($scope, $rootScope) {

})

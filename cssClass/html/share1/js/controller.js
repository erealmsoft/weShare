(function () {
    'use strict';

    angular.module('cssApp').controller('share1Controller', share1Controller);

    share1Controller.$inject = ['$scope'];

    function share1Controller($scope) {
        hljs.initHighlighting();
        $scope.showResult1 = false;
        $scope.showResult1Text = '显示答案';
        $scope.showPritice1Result = function () {
            $scope.showResult1 = !$scope.showResult1;
            $scope.showResult1Text = $scope.showResult1 ? '隐藏答案' : '显示答案';
        }
    }

}());
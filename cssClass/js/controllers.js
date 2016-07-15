(function () {
    'use strict';

    angular
        .module('cssApp')
        .controller('cssController', cssController);

    cssController.injector = ['$scope', '$state'];

    function cssController($scope, $state) {
        $state.go('default');
    }
}());
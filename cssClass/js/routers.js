(function () {
    'use strict';

    angular
        .module('cssApp')
        .config(routeConfig);

    routeConfig.$inject = ['$locationProvider','$urlRouterProvider', '$stateProvider'];

    function routeConfig($locationProvider,$urlRouterProvider, $stateProvider) {
        // $locationProvider.html5Mode({
        //     enabled: true,
        //     requireBase: false
        // }).hashPrefix('!');
        $stateProvider
            .state('default',{
                url:'/default',
                templateUrl:'default.html'
            })
            .state('share1', {
                url: '/share1',
                templateUrl: 'html/share1/index.html',
                controller: 'share1Controller'
            })
            .state('share2', {
                url: '/share2',
                templateUrl: 'html/share2/index.html',
                controller: 'share2Controller'
            })
            .state('share3', {
                url: '/share3',
                templateUrl: 'html/share3/index.html',
                controller: 'share3Controller'
            })
            .state('share4', {
                url: '/share4',
                templateUrl: 'html/share4/index.html',
                controller: 'share4Controller'
            })
    }
}());
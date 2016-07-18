/**
 *Copyright 2014 Erealm Info & Tech.
 *
 * Created by ken on 11/20/2014.
 */
'use strict';

var train = angular.module('train', ['ngAnimate', 'ui.bootstrap']);

//train.factory('errorHttpInterceptor', ['$q', '$rootScope', '$injector',
//    function ($q, $rootScope, $injector) {
//        $rootScope.mainLoading = false;
//        $rootScope.http = null;
//
//        return {
//            'request': function (config) {
//                $rootScope.mainLoading = true;
//                return config || $q.when(config);
//            },
//            'requestError': function (rejection) {
//                $rootScope.http = $rootScope.http || $injector.get('$http');
//                if ($rootScope.http.pendingRequests.length < 1) {
//                    $rootScope.mainLoading = false;
//                }
//
//                return $q.reject(rejection);
//            },
//            'response': function (response) {
//                $rootScope.http = $rootScope.http || $injector.get('$http');
//                if ($rootScope.http.pendingRequests.length < 1) {
//                    $rootScope.mainLoading = false;
//                }
//
//                if (response.data.code){
//                    if (response.data.code === 'success') {
//                        response.data = response.data.data;
//                    }else {
//                        $rootScope.showMessage(response.data.code, response.data.type);
//                        response.data = null;
//                    }
//                }
//
//                return response || $q.when(response);
//            },
//            'responseError': function (rejection) {
//                $rootScope.http = $rootScope.http || $injector.get('$http');
//                if ($rootScope.http.pendingRequests.length < 1) {
//                    $rootScope.mainLoading = false;
//                }
//                $rootScope.showMessage(rejection.status);
//                return $q.reject(rejection);
//            }
//        };
//    }
//])
//.config(['$httpProvider', function($httpProvider){
//    // Tell the module to store the language in the cookie
//    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
//    $httpProvider.defaults.timeout = 60000;
//    var csrfToken = $('meta[name="csrf-token"]').attr('content');
//    if(csrfToken){
//        ($httpProvider.defaults.headers.common['X-CSRF-Token'] = csrfToken);
//    }
//    $httpProvider.interceptors.push('errorHttpInterceptor');
//}]);

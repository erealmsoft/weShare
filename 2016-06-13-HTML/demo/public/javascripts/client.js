/**
 *Copyright 2014 Erealm Info & Tech.
 *
 * Created by ken on 11/20/2014.
 */
'use strict';

angular.module('train').factory('client' , ['$http' , function ($http) {
//    var convertDate = function(date) {
//        if (!date) return '';
//        var month = (date.getMonth()  + 1) < 10  ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
//        var day   = (date.getDate())  < 10 ? '0' + (date.getDate()) : (date.getDate());
//        return date.getFullYear() + '-' + month +  '-' + day;
//    };

    return{
        //Index
        QueryLateQuery:function() {
            return $http.get('../public/data/lateQuery.json');
        }
    };
}]);




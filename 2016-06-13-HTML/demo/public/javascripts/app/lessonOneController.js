
'use strict';

angular.module('train').controller('lessonOneController' , ['$scope' , 'client' ,function($scope , client){

        $scope.tags =
            [
                {title: '标题', template:'title'},
                {title: '段落', template:'paragraph'},
                {title: '链接', template:'link'},
                {title: '头部', template:'head'},
                {title: '图像', template:'image'},
                {title: '列表', template:'list'},
                {title: '表格', template:'table'},
                {title: '表单', template:'form'}
            ];
}]);



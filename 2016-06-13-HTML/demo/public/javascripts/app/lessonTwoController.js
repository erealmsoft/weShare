
'use strict';

angular.module('train').controller('lessonTwoController' , ['$scope' , 'client' ,function($scope , client){

        $scope.tags =
            [
                // {title: '布局', template:'layout'},
                {title: '块级元素与内联元素', template:'piece'},
                {title: '不赞成使用的元素', template:'disapprove'},
                {title: '文本格式化标签', template:'format'},
                {title: '属性', template:'property'},
                {title: '跑马灯', template:'marquee'}
            ];
}]);



/**
 * Created by julia on 14-7-16.
 */
'use strict';

angular.module('partyBidApp')
    .controller('ActivityListController', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        //输出活动，后输入的活动先输出
//        if(localStorage.length!=0)
//        {
//            var name = JSON.parse(localStorage['activity_name']);
//            $scope.names = name.reverse();
//        }

        if(localStorage.length!=0)
        {
            var names = [];
            for(var n=localStorage.length-1;n>=0;n--){
                name = JSON.parse(localStorage[n]);
                names.push(name);
            }
            $scope.names = names;
        }

        //跳转到create_activity页面
        $scope.go_create_activity = function () {
            $location.path('/create_activity');
        }

        //跳转到activity_sign_up页面
        $scope.go_sign_up = function(){
            $location.path('/activity_sign_up');
        }
    });


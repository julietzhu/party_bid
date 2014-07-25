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
        $scope.go_sign_up = function(list){
            var activity_name = list;
            localStorage.setItem("activity_name", activity_name);;
            $location.path('/activity_sign_up');
        }
    });


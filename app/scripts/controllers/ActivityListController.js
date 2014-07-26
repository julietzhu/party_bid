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

        var names = [];

        if(localStorage.length!=0)
        {
            for(var n=0;n<localStorage.length;n++){
                var name = JSON.parse(localStorage[n]);
                names.push(name[0]);
            }
            $scope.lists = names.reverse();
        }

        //跳转到create_activity页面
        $scope.go_create_activity = function () {
            $location.path('/create_activity');
        }

        //跳转到activity_sign_up页面
        $scope.go_sign_up = function(list){
            var activity_key = list;
            names.reverse();
            var position = names.indexOf(activity_key);
            localStorage.setItem("activity_key", position);
            $location.path('/activity_sign_up');
        }
    });


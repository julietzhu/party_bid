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

        //输出活动名称
        $scope.activity_name_list = Activity.getActivityName().reverse();

        //跳转到create_activity页面
        $scope.go_create_activity = function () {
            $location.path('/create_activity');
        }

        //跳转到activity_sign_up页面
        $scope.go_sign_up = function(name){
            var position = Activity.get_activity_position(name);
            var status = Activity.getActivityStatus(position);
            console.log(status);
            $location.path('/activity_sign_up/'+name+"/"+status);
        }

    });


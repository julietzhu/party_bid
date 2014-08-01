/**
 * Created by julia on 14-7-16.
 */
'use strict';

angular.module('partyBidApp')
    .controller('ActivityListController', function ($scope, $location) {
        //开始的活动背景色是黄色
        $scope.status = function (activity_name) {
            var activity = (Activity.getStartActivityName())[0];
            var status = (Activity.getStartActivityName())[1];
            if (activity == "no") {
                return "";
            }
            else {
                if (activity == activity_name && status == "start") {
                    return "start";
                }
            }
        }

        //输出活动名称
        $scope.activity_name_list = Activity.getActivityName().reverse();

        //跳转到create_activity页面
        $scope.go_create_activity = function () {
            $location.path('/create_activity');
        }

        //跳转到activity_sign_up页面
        $scope.go_sign_up = function (name) {
            var position = Activity.get_activity_position(name);
            var status = Activity.getActivityStatus(position);
            $location.path('/activity_sign_up/' + name + "/" + status);
        }

        //创建活动按钮是否可用
        $scope.hasActivityStarted = function () {
            var activity_name = Activity.getStartActivityName();
            if (typeof(activity_name) == "object") {
                if (activity_name[1] == "start") {
                    {
                        return "true";
                    }
                }
            }
        }
    });


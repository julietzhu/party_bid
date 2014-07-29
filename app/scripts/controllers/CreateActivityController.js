/**
 * Created by julia on 14-7-16.
 */

'use strict';

angular.module('partyBidApp')
    .controller('CreateActivityController', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        //判断返回按钮是否显示
        $scope.hasActivities = (localStorage.length!=0);

        //跳转到activity_list
        $scope.back_to_activity_list = function () {
            $location.path('/activity_list');
        }

        //创建活动
        $scope.create_activity = function (activity_name) {
            var flag = CreateActivity.judgeActivityName(activity_name);
            console.log(flag);
            if(flag==true){
                $scope.tips="*活动名称重复";
            }
            else{
                CreateActivity.save(activity_name);
                $location.path('/activity_sign_up');
            }
        }
    });

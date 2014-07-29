/**
 * Created by julia on 14-7-16.
 */
'use strict';

angular.module('partyBidApp')
    .controller('ActivitySignUpController', function ($scope, $location,$routeParams) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        console.log($routeParams.activity_name);
        //跳转到activity_list页面
        $scope.go_list = function () {
            $location.path('/activity_list');
        }

        // 判断开始按钮的状态以及判断有其他活动开始时，开始按钮不可用
        if(activity[1]=="not_start")
        {
            $scope.flag = "true";
            $scope.switch = "start";
        }
        if(activity[1]=="start")
        {
            $scope.switch = "finish";
        }
        else
        {
            $scope.switch = "start";
        }

        //开始按钮与结束按钮转换，修改活动状态
        $scope.start = function () {
            for(var n=0;n<localStorage.length;n++)
            {
                activity = JSON.parse(localStorage[n]);
                if(n==activity_key)
                {
                    $scope.switch = "finish";
                    activity[1] = "start";
                }
                else{
                    activity[1] = "not_start";
                }
                localStorage[n] = JSON.stringify(activity);
            }
        }
        $scope.finish = function () {
            if(confirm('确认要结束本次报名吗？'))
            {
                for(var n=0;n<localStorage.length;n++)
                {
                    activity = JSON.parse(localStorage[n]);
                    activity[1] = "finish";
                    localStorage[n] = JSON.stringify(activity);
                }
            }
        }
    });

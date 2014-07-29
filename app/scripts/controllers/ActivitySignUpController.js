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

        //跳转到activity_list页面
        $scope.go_list = function () {
            $location.path('/activity_list');
        }

        // 判断开始按钮的状态以及判断有其他活动开始时，开始按钮不可用
        var status = localStorage.getItem("start_activity");
        if(status==null||status=="no")
        {
            $scope.switch = "start";
        }
        else{
            if(status==$routeParams.activity_name)
            {
                $scope.switch = "finish";
            }
            else
            {
                $scope.flag = "true";
                $scope.switch = "start";
            }
        }

        //开始按钮与结束按钮转换，修改活动状态
        $scope.start = function () {
            $scope.switch = Activity.start($routeParams.activity_name);
        }
        $scope.finish = function () {
            $scope.switch = Activity.finish();
        }
    });

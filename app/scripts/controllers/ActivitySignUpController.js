/**
 * Created by julia on 14-7-16.
 */
'use strict';

angular.module('partyBidApp')
    .controller('ActivitySignUpController', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        //找到了活动的key
        var activity_key = localStorage.getItem('activity_key');
        var activities = Number(activity_key);//将对象变成number
        var activity = [];
      //  activity = JSON.parse(localStorage[activities]);
        localStorage.removeItem("activity_key");

        //跳转到activity_list页面
        $scope.go_list = function () {
            console.log(activity[1]+activity[2]);
            if(activity[2]=="new_activity")
            {
                activity[2] = "not_start";
                localStorage[activities] = JSON.stringify(activity);
            }
            $location.path('/activity_list');
        }

        //新建活动时判断开始按钮的状态以及判断有其他活动开始时，开始按钮不可用
        if(activity[2]=="start"){
            $scope.switch = "finish";

        }
        else{
            $scope.switch = "start";
            if(activity[2]=="not_start")
            {
                $scope.flag = "true";
            }
        }

        //开始按钮与结束按钮转换，修改活动状态
        $scope.start = function () {
            $scope.switch = "finish";
            activity[2] = "start";
            localStorage[activities] = JSON.stringify(activity);
        }
        $scope.finish = function () {
            if(confirm('确认要结束本次报名吗？'))
            {
                $scope.switch = "start";
                activity[2] = "finish";
                localStorage[activities] = JSON.stringify(activity);
            }
        }
    });

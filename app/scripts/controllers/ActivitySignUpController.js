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
        //跳转到activity_list页面
        $scope.go_list = function () {
            $location.path('/activity_list')
        }

        //找到了活动的key
        var activity_key = localStorage.getItem('activity_key');
        var activities = Number(activity_key);//将对象变成number
        var activity = [];
        activity = JSON.parse(localStorage[activities]);
        localStorage.removeItem("activity_key");

//        $scope.state = "开始";
//        var i = 0;
//        $scope.start_finish = function(){     //开始按钮变成结束按钮
//            if(i%2==0)                        //目前是开始状态
//            {
//                $scope.state = "结束";
//                i++;                    //i=1
//            }
//            else{
//                $scope.state = "开始";
//                i++;                    //i=2
//            }
//        }
//        i=0;
        $scope.switch = "start";
        $scope.start = function () {
            $scope.switch = "end";
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
        localStorage[activities] = JSON.stringify(activity);
 /*       var t ;
        //开始按钮和结束按钮互斥显示
        $scope.start = true;
        $scope.start_finish = function(){     //开始按钮变成结束按钮
            $scope.start = false;
            activity[2] = "start";
            localStorage[activities] = JSON.stringify(activity);
            t = true;    //判断是否有活动进行，true为有活动
        }

        //开始按钮是否可用
        $scope.xx = t;

        $scope.finish_start = function(){     //结束按钮变成开始按钮，并弹出提示框
            if(confirm('确认要结束本次报名吗？'))
            {
                $scope.start = true;
                activity[2] = "finish";
                localStorage[activities] = JSON.stringify(activity);
          //      flag = false;
            }
            $scope.activity_state = "start";
        }*/
    });

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

        //
        console.log(localStorage.getItem('activity_name'));
        localStorage.removeItem("activity_name")

        //活动状态
        $scope.activity_state = "not_start";

        //开始按钮和结束按钮互斥显示
        $scope.start = true;
        $scope.start_finish = function(){     //开始按钮变成结束按钮
            $scope.start = false;
            $scope.activity_state = "start";
        }

        $scope.finish_start = function(){     //结束按钮变成开始按钮，并弹出提示框
            if(confirm('确认要结束本次报名吗？'))
            {
                $scope.start = true;
                $scope.activity_state = "finish";
            }
            $scope.activity_state = "start";
        }
    });

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
        $scope.play = (localStorage.length!=0);

        //跳转到activity_list
        $scope.back_to_activity_list = function () {
            $location.path('/activity_list');
        }

        //创建活动，判断名称是否重复，跳转到activity_sign_up页面
        $scope.cr_go_sign_up = function (activity_name) {
            var activities_name = $scope.activity_name;
            var name = [];
            name.push(activities_name);
            //新数据结构类型,key:value
            if(localStorage.length==0){
                name.push(0);
                name.push("new_activity");
                localStorage['0'] = JSON.stringify(name);
                $location.path('/activity_sign_up');
            }
            else{
                var flag = 0;
                for(var n=0;n<localStorage.length;n++)
                {
                    var storedNames = [];
                    storedNames = JSON.parse(localStorage[n]);
                    if (storedNames[0]==activities_name) {
                        $scope.tips = "*活动名称重复";
                        flag = 1;
                        break;
                    }
                }
                if(flag==0){
                    name.push(localStorage.length);
                    name.push("new_activity");
                    localStorage[localStorage.length] = JSON.stringify(name);
                    $location.path('/activity_sign_up');
                }
            }

        }
    });

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
        $scope.startIsUsed = function(){
            var activity_name = Activity.getStartActivityName();
            var status = $routeParams.status;
            if(status=="start"){
               $scope.switch = "finish";
            }
            else{
                if(typeof(activity_name)=="object"){
                    if(activity_name[1]=="finish"){
                    }
                    else{
                        $scope.flag = "true";
                    }
                }
                $scope.switch = "start";
            }
        }
        $scope.startIsUsed();

        //开始按钮与结束按钮转换，修改活动状态
        $scope.start = function () {
            $scope.switch = Activity.start($routeParams.activity_name);
  //          location.reload(true);
        }
        $scope.finish = function () {
            $scope.switch = Activity.finish($routeParams.activity_name);
  //          location.reload(true);
        }

        $scope.initiate = function () {
            var phone_number = Message.getPhoneNumber($routeParams.activity_name,$routeParams.status);
            $scope.total_number = phone_number.length;
            $scope.name_list = Message.getPeopleName($routeParams.activity_name,$routeParams.status);
            $scope.number_list = Message.getPhoneNumber($routeParams.activity_name,$routeParams.status);
        }

        $scope.initiate();
    });

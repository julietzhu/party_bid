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
        var status = Activity.getStartActivityName(); //这里可以尝试抽函数
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


        var phone_number = Message.getPhoneNumber();
        $scope.total_number = phone_number.length;
        $scope.name_list = Message.getPeopleName();
        $scope.number_list = Message.getPhoneNumber();

        console.log(Message.dropSpace("aaa   bbbb  ss d "));

        var temp = {"message":[{"create_date":"xx","message":"yy","phone":"123"}]};
        console.log("temp"+temp.message[0].message);
      //  console.log(json_message.message[0].phone);

      //  console.log("test"+Message.isRightMessage("bm1234523"));
    });

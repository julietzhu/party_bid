/**
 * Created by julia on 14-7-16.
 */
'use strict';

angular.module('partyBidApp')
    .controller('CreateActivityCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.play = (localStorage.length!=0);

        $scope.back_to_activity_list = function () {
            $location.path('/activity_list')
        }

        $scope.go_sign_up = function () {
            var temp_act_name = $scope.activity_name;

            if (localStorage.length != 0) {
                var storedNames = [];
                storedNames = JSON.parse(localStorage['activity_name']);
                var i = 0;
                for (var n = 0; n<storedNames.length; n++) {
                    if (storedNames[n]==temp_act_name) {
                        $scope.tips = "活动名称重复";
                        i = 1;
                        break;
                    }
                    else {
                    }
                }
                if(i==0){
                    storedNames.push(temp_act_name);
                    localStorage['activity_name'] = JSON.stringify(storedNames);
                    $location.path('/activity_sign_up');
                }
                else{
                }
            } else {
                var name = [];
                name.push(temp_act_name);
                localStorage['activity_name'] = JSON.stringify(name);
                $location.path('/activity_sign_up');
            }

        }
    });

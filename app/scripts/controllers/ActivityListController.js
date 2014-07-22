/**
 * Created by julia on 14-7-16.
 */
'use strict';

angular.module('partyBidApp')
    .controller('ActivityListController', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        if(localStorage.length!=0)
        {
            var name = JSON.parse(localStorage['activity_name']);
            $scope.names = name.reverse();
        }
        else{
        }

        $scope.go_create_activity = function () {
            $location.path('/create_activity');
        }

        $scope.go_sign_up = function(){
            $location.path('/activity_sign_up');
        }
    });


/**
 * Created by julia on 14-7-16.
 */
'use strict';

angular.module('partyBidApp')
    .controller('ActivityListCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        if(localStorage.length!=0)
        {
            console.log(localStorage.length);
            var name = JSON.parse(localStorage['activity_name']);
            $scope.name = name.reverse();
        }
        else{
        }
        $scope.go_create_activity = function () {
            $location.path('/create_activity');
        }
    });


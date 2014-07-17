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
        $scope.back_to_activity_list = function () {
            $location.path('/activity_list')
        }
        $scope.go_sign_up = function () {
            var temp =;
            for(var n= 0;;n++)
            $location.path('/activity_sign_up')
        }

    });

'use strict';

/**
 * @ngdoc function
 * @name partyBidApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the partyBidApp
 */
angular.module('partyBidApp')
  .controller('MainController', function ($scope,$location) {
    if(localStorage.length != 0){
        $location.path('/activity_list');
    }
    else{
        $location.path('/create_activity');
    }
  });

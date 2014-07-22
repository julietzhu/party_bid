/**
 * Created by julia on 14-7-16.
 */
'use strict';

angular
    .module('partyBidApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainController'
            })
            .when('/create_activity', {
                templateUrl: 'views/create_activity.html',
                controller: 'CreateActivityController'
            })
            .when('/activity_sign_up', {
                templateUrl: 'views/activity_sign_up.html',
                controller: 'ActivitySignUpController'
            })
            .when('/activity_list', {
                templateUrl: 'views/activity_list.html',
                controller: 'ActivityListController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

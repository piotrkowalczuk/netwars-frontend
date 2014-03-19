angular.module('NWApp', ['ngRoute', 'ngCookies', 'ngAnimate', 'ui.bootstrap'])
    .config([
        '$routeProvider',
        '$locationProvider',
        function NWAppConfig($routeProvider, $locationProvider) {
            'use strict';

            $routeProvider.when('/forum', {
                controller: 'ListController',
                templateUrl: '/templates/forum/list.html'
            })
            .when('/topic/create', {
                controller: 'CreateController',
                templateUrl: '/templates/topic/create.html'
            })
            .when('/topic/:id', {
                controller: 'ShowController',
                templateUrl: '/templates/topic/index.html'
            })
            .when('/', {
                controller: 'DashboardController',
                templateUrl: '/templates/dashboard/index.html'
            })
            .otherwise({
                template: 'Error 404'
            });

            $locationProvider.html5Mode(true);
        }
    ]
);
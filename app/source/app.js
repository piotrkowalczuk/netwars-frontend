angular.module('NWApp', ['ngRoute', 'ngCookies', 'ngAnimate', 'ui.bootstrap'])
    .config([
        '$routeProvider',
        '$locationProvider',
        function NWAppConfig($routeProvider, $locationProvider) {
            'use strict';

            $routeProvider.when('/forum', {
                controller: 'ForumListController',
                templateUrl: '/templates/forum/list.html'
            })
            .when('/topic/:id', {
                controller: 'TopicController',
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
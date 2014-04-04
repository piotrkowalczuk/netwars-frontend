angular.module('NWApp', ['ngRoute', 'ngCookies', 'ngAnimate', 'ui.bootstrap'])
    .config([
        '$routeProvider',
        '$locationProvider',
        '$httpProvider',
        function NWAppConfig($routeProvider, $locationProvider, $httpProvider) {
            'use strict';

            $routeProvider.when('/forum', {
                controller: 'ForumListController',
                templateUrl: '/templates/forum/list.html'
            })
            .when('/forum/:id', {
                controller: 'ForumShowController',
                templateUrl: '/templates/forum/show.html'
            })
            .when('/topic/create', {
                controller: 'TopicCreateController',
                templateUrl: '/templates/topic/create.html'
            })
            .when('/topic/:id', {
                controller: 'TopicShowController',
                templateUrl: '/templates/topic/index.html'
            })
            .when('/user/:id', {
                controller: 'UserShowController',
                templateUrl: '/templates/user/show.html'
            })
            .when('/register', {
                controller: 'UserRegisterController',
                templateUrl: '/templates/user/register.html'
            })
            .otherwise({
                template: 'Error 404'
            });

            $locationProvider.html5Mode(true);

            $httpProvider.interceptors.push('HttpResponseInterceptor');
        }
    ]
);
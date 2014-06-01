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
                templateUrl: '/templates/forum/show.html',
                reloadOnSearch: false
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
            .when('/user/:id/edit', {
                controller: 'UserEditProfileController',
                templateUrl: '/templates/user/edit.html'
            })
            .when('/register', {
                controller: 'UserRegisterController',
                templateUrl: '/templates/user/register.html'
            })
            .when('/stream/:id', {
                controller: 'StreamShowController',
                templateUrl: '/templates/stream/show.html'
            })
            .when('/streams', {
                controller: 'StreamListController',
                templateUrl: '/templates/stream/index.html'
            })
            .when('/search/result/:id', {
                controller: 'SearchResultController',
                templateUrl: '/templates/search/result.html'
            })
            .otherwise({
                template: 'Error 404'
            });

            $locationProvider.html5Mode(true);

            $httpProvider.interceptors.push('HttpResponseInterceptor');
        }
    ]
);

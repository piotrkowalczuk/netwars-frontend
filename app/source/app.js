angular.module('NWApp', ['ngRoute', 'ngCookies', 'ngAnimate', 'ui.bootstrap'])
    .config(function NWAppConfig($routeProvider) {
        'use strict';

        $routeProvider.when('/forum', {
            controller: 'ForumListController',
            templateUrl: 'templates/forum/list.html'
        })
        .when('/', {
            controller: 'DashboardController',
            templateUrl: 'templates/dashboard/index.html'
        })
        .otherwise({
            template: 'Error 404'
        });
});
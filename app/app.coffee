NetwarsApp = angular.module('NetwarsApp', ['ngResource'])

NetwarsApp.config ($routeProvider) ->
  $routeProvider
    .when('/forum',
      controller: 'ForumCtrl'
      templateUrl: 'view/forum.html'
    ).when('/forum/topic/:id',
      controller: 'TopicCtrl'
      templateUrl: 'view/topic.html'
    ).otherwise({
      template: 'Error 404'
    })
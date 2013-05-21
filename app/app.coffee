NetwarsApp = angular.module('NetwarsApp', ['ngResource'])

NetwarsApp.config ($routeProvider) ->
  $routeProvider
    .when('/',
      controller: 'ForumListController'
      templateUrl: 'view/forumList.html'
    )
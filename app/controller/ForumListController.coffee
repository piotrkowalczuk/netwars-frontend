ForumListController = ($scope, $window, $location, ForumResource) ->

  $scope.forums = ForumResource.get {}

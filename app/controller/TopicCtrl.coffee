TopicCtrl = ($scope, $window, $location, $routeParams, TopicResource, PostListResource) ->
  $scope.topic = TopicResource.get({'id': $routeParams.id}, (topic, getResponseHeaders) ->
    topic.postList = PostListResource.get({'topic': topic.id})
  )
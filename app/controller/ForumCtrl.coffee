ForumCtrl = ($scope, $window, $location, ForumListResource, TopicListResource) ->
  $scope.forumList = ForumListResource.get({}, (forumList, getResponseHeaders) ->
    forumList.objects.forEach((forum) ->
      forum.topicList = TopicListResource.get({'forum': forum.id})
    )
  )


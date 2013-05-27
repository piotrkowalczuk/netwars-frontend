NetwarsApp.factory 'TopicListResource', ($resource) ->
  topicList = $resource 'http://backend.netwars.local.tld\\:8000/api/topic/:forumId', {forumId:'@forum'}
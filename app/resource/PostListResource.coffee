NetwarsApp.factory 'PostListResource', ($resource) ->
  postList = $resource 'http://backend.netwars.local.tld\\:8000/api/posts/:topicId', {topicId:'@topic'}
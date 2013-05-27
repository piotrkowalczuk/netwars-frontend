NetwarsApp.factory 'ForumListResource', ($resource) ->
  forumList = $resource 'http://backend.netwars.local.tld\\:8000/api/forums'
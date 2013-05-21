NetwarsApp.factory 'ForumResource', ($resource) ->
  forum = $resource 'http://backend.netwars.local.tld\\:8000/api/forum?format=json'
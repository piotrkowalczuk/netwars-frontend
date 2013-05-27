NetwarsApp.factory 'TopicResource', ($resource) ->
  topic = $resource 'http://backend.netwars.local.tld\\:8000/api/topic/:id', {id:'@id'}
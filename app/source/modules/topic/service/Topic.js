angular.module('NWApp').factory('Topic',
    [
        '$http',
        function Topic($http) {
            var fetchTopic = function fetchTopic(topicId) {
                return $http({
                    url: '/api/topic/' + topicId,
                    method: "GET"
                });
            };

            var fetchTopics = function fetchTopics(forumId, params) {
                return $http({
                    url: '/api/forum/'+forumId+'/topics',
                    method: "GET",
                    params: params
                });
            };

            var createTopic = function createTopic(data) {
                return $http({
                    url: '/api/topic',
                    method: "POST",
                    data: data
                });
            };

            return {
                fetchTopic: fetchTopic,
                fetchTopics: fetchTopics,
                createTopic: createTopic
            };
        }
    ]
);
angular.module('NWApp').factory('Topic',
    [
        '$http',
        'UserSession',
        function Topic($http, UserSession) {
            var fetchTopic = function fetchTopic(topicId) {
                return $http({
                    url: '/api/topic/' + topicId,
                    method: "GET"
                });
            }

            var fetchTopics = function fetchTopics(forumId) {
                return $http({
                    url: '/api/topics/' + forumId,
                    method: "GET"
                });
            }

            var createTopic = function createTopic(data) {
                return $http({
                    url: '/api/topic',
                    method: "POST",
                    params: UserSession.getUserCredentials(),
                    data: data
                });
            };

            return {
                fetchTopic: fetchTopic,
                fetchTopics: fetchTopics,
                createTopic: createTopic
            }
        }
    ]
);
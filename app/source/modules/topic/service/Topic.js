angular.module('NWApp').factory('Topic',
    [
        '$http',
        'User',
        function Topic($http, User) {
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
                    params: User.getUserCredentials(),
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
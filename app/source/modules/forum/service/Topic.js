angular.module('NWApp').factory('Topic',
    ['$http', function Topic($http) {
        var fetchTopic = function fetchTopic(topicId) {
            return $http({
                url: '/api/topics/'+topicId,
                method: "GET"
            });
        }

        var fetchTopics = function fetchTopics(forumId) {
            return $http({
                url: '/api/topics/'+forumId,
                method: "GET"
            });
        }

        return {
            fetchTopic: fetchTopic,
            fetchTopics: fetchTopics,
        }
    }]
);
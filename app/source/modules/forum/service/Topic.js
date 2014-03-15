angular.module('NWApp').factory('Topic',
    ['$http', function Topic($http) {
        var fetchTopic = function fetchTopic(forumId, apiCredentials) {
            return $http({
                url: '/api/topics/'+forumId,
                method: "GET",
                params: apiCredentials
            });
        }

        var fetchTopics = function fetchTopics(apiCredentials) {
            return $http({
                url: '/api/topics',
                method: "GET",
                params: apiCredentials
            });
        }

        return {
            fetchTopic: fetchTopic,
            fetchTopics: fetchTopics,
        }
    }]
);
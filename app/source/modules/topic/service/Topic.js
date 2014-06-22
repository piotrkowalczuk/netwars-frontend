angular.module('NWApp').factory('Topic',
    [
        '$http',
        'UserSession',
        function Topic($http, UserSession) {
            var fetchTopic = function fetchTopic(topicId) {
                return $http({
                    url: '/api/topic/' + topicId,
                    method: "GET",
                    params: UserSession.getUserCredentials()
                });
            };

            var fetchTopics = function fetchTopics(forumId, params) {
                var params = params || {};

                if (UserSession.isLogged()) {
                    params.token = UserSession.getUserToken();
                    params.id = UserSession.getUserId();
                }

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
                    params: UserSession.getUserCredentials(),
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
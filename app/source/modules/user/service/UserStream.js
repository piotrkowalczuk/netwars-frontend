angular.module('NWApp').factory('UserStream',
    [
        '$http',
        'UserSession',
        function UserStream($http, UserSession) {

            var fetchUserStream = function fetchUserStream() {
                return $http({
                    url: '/api/user/stream',
                    params: UserSession.getUserCredentials(),
                    method: "GET"
                });
            };

            var createOrModifyPost = function createOrModifyPost(data) {
                return $http({
                    url: '/api/user/stream',
                    method: "POST",
                    params: UserSession.getUserCredentials(),
                    data: data
                });
            };

            return {
                fetchUserStream: fetchUserStream,
                createOrModifyPost: createOrModifyPost
            };
        }
    ]
);

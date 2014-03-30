angular.module('NWApp').factory('User',
    [
        '$http',
        function User($http) {

            var fetchUser = function fetchTopic(userId) {
                return $http({
                    url: '/api/user/' + userId,
                    method: "GET"
                });
            };

            var createUser = function createUser(data) {
                return $http({
                    url: '/api/register',
                    method: "POST",
                    data: data
                });
            };

            return {
                fetchUser: fetchUser,
                createUser: createUser
            };
        }
    ]
);
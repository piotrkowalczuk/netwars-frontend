angular.module('NWApp').factory('User',
    [
        '$http',
        function User($http) {

            var fetchUser = function fetchUser(userId) {
                return $http({
                    url: '/api/user/' + userId,
                    method: "GET"
                });
            };

            var fetchOnlineUsers = function fetchOnlineUsers() {
                return $http({
                    url: '/api/users/online',
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
                fetchOnlineUsers: fetchOnlineUsers,
                createUser: createUser
            };
        }
    ]
);

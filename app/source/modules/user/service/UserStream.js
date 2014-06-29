angular.module('NWApp').factory('UserStream',
    [
        '$http',
        function UserStream($http) {

            var fetchUserStream = function fetchUserStream() {
                return $http({
                    url: '/api/user/stream',
                    method: "GET"
                });
            };

            var createOrModifyPost = function createOrModifyPost(data) {
                return $http({
                    url: '/api/user/stream',
                    method: "POST",
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

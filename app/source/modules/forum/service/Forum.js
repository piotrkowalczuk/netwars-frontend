angular.module('NWApp').factory('Forum',
    ['$http', function Forum($http) {
        var fetchForum = function fetchForums(forumId, apiCredentials) {
            return $http({
                url: '/api/forum/'+forumId,
                method: "GET",
                params: apiCredentials
            });
        }

        var fetchForums = function fetchForums(apiCredentials) {
            return $http({
                url: '/api/forums',
                method: "GET",
                params: apiCredentials
            });
        }

        return {
            fetchForum: fetchForum,
            fetchForums: fetchForums,
        }
    }]
);
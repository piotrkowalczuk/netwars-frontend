angular.module('NWApp').factory('Forum',
    ['$http', function Forum($http) {
        var fetchForum = function fetchForums(forumId) {
            return $http({
                url: '/api/forum/'+forumId,
                method: "GET"
            });
        };

        var fetchForums = function fetchForums() {
            return $http({
                url: '/api/forums',
                method: "GET"
            });
        };

        return {
            fetchForum: fetchForum,
            fetchForums: fetchForums
        };
    }]
);
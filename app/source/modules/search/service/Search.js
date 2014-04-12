angular.module('NWApp').factory('Search',
    [
        '$http',
        'UserSession',
        function Search($http, UserSession) {

            var search = function createPost(data) {
                return $http({
                    url: '/api/search',
                    method: "POST",
                    params: UserSession.getUserCredentials(),
                    data: data
                });
            };

            var fetchResults = function createPost(searchId) {
                return $http({
                    url: '/api/search/'+searchId,
                    method: "GET",
                    params: UserSession.getUserCredentials()
                });
            };

            return {
                search: search,
                fetchResults: fetchResults
            };
        }
    ]
);
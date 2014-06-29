angular.module('NWApp').factory('Search',
    [
        '$http',
        function Search($http) {

            var search = function createPost(data) {
                return $http({
                    url: '/api/search',
                    method: "POST",
                    data: data
                });
            };

            var fetchResults = function createPost(searchId) {
                return $http({
                    url: '/api/search/'+searchId,
                    method: "GET"
                });
            };

            return {
                search: search,
                fetchResults: fetchResults
            };
        }
    ]
);
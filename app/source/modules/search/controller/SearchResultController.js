angular.module('NWApp').controller('SearchResultController',
    [
        '$scope',
        '$routeParams',
        '$sce',
        '$filter',
        'Search',
        function SearchResultController($scope, $routeParams, $sce, $filter, Search) {
            $scope.result = {
                posts: [],
                topics: []
            };

            $scope.fetchResults = function () {
                Search.fetchResults($routeParams.id)
                    .success(function(response) {
                        $scope.result.posts = response.posts;
                        $scope.result.topics = response.topics;
                    });
            };

            $scope.parsePost = function(text) {
                var parsedHtml = '';
                parsedHtml = $filter('parseYoutubeUrl')(text);
                parsedHtml = $filter('parseUrl')(parsedHtml);
                parsedHtml = $filter('newLine')(parsedHtml);
                return $sce.trustAsHtml(parsedHtml);
            };
        }
    ]
);



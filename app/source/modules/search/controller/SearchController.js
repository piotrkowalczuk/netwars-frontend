angular.module('NWApp').controller('SearchController',
    [
        '$scope',
        '$location',
        'Search',
        function SearchController($scope, $location, Search) {
            $scope.searchParams = {
                text: '',
                range: ''
            };

            $scope.search = function () {
                Search.search($scope.searchParams)
                    .success(function(searchId) {
                        var url = '/search/result/'+searchId;
                        $location.path(url);
                    });
            };

            $scope.searchOnRange = function(range) {
                $scope.searchParams.range = range;
                $scope.search();
            };
        }
    ]
);



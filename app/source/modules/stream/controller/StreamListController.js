angular.module('NWApp').controller(
    'StreamListController',
    [
        '$scope',
        '$routeParams',
        'Stream',
        function StreamListController($scope, $routeParams, Stream)
        {
            $scope.streams = [];
            $scope.liveStreams = [];

            $scope.fetchStreams = function () {
                Stream.fetchStreams()
                    .success(function(streams) {
                        $scope.streams = streams;
                    });
            };
        }
    ]
);

angular.module('NWApp').controller(
    'StreamShowController',
    [
        '$scope',
        '$routeParams',
        '$sce',
        'Stream',
        function StreamShowController($scope, $routeParams, $sce, Stream)
        {
            $scope.stream = {};

            $scope.fetchStream = function () {
                Stream.fetchStream($routeParams.id)
                    .success(function(stream) {
                        $scope.stream = stream;
                        $scope.streamUrl = $sce.trustAsResourceUrl('http://twitch.tv/'+stream.identifier.toString());
                    });
            };
        }
    ]
);

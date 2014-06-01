angular.module('NWApp').factory('Stream',
    [
        '$http',
        function Stream($http) {

            var fetchStream = function fetchStream(id) {
                return $http({
                    url: '/api/stream/'+id,
                    method: "GET"
                });
            };

            var fetchStreams = function fetchStream(id) {
                return $http({
                    url: '/api/streams',
                    method: "GET"
                });
            };

            return {
                fetchStream: fetchStream,
                fetchStreams: fetchStreams
            };
        }
    ]
);

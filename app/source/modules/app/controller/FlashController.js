angular.module('NWApp').controller(
    'FlashController',
    [
        '$scope',
        '$timeout',
        function FlashController($scope, $timeout) {
            $scope.alerts = [];

            $scope.$on('flashMessage', function(event, type, message) {
                $scope.alerts.push({type: type, message: message});
                $timeout(closeAlert, 5000);
            });

            var closeAlert = function() {
                $scope.alerts.splice($scope.alerts.count, 1);
            };
        }
    ]
);
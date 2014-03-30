angular.module('NWApp').controller(
    'UserShowController',
    [
        '$scope',
        '$routeParams',
        '$sce',
        '$filter',
        'User',
        'Forum',
        function UserShowController($scope, $routeParams, $sce, $filter, User)
        {
            $scope.user = {};

            $scope.fetchUser = function () {
                User.fetchUser($routeParams.id)
                    .success(function(user) {
                        $scope.user = user;
                    });
            };
        }
    ]
);

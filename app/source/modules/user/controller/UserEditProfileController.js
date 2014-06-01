angular.module('NWApp').controller(
    'UserEditProfileController',
    [
        '$scope',
        '$routeParams',
        '$sce',
        '$filter',
        'User',
        function UserEditProfileController($scope, $routeParams, $sce, $filter, User)
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

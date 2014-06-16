angular.module('NWApp').controller(
    'UsersOnlineController',
    [
        '$scope',
        'User',
        function UsersOnlineController($scope, User) {
            $scope.onlineUsers = {};

            $scope.fetchOnlineUsers = function () {
                User.fetchOnlineUsers()
                    .success(function(onlineUsers) {
                        $scope.onlineUsers = onlineUsers;
                    });
            };

            $scope.numberOfUsers = function () {
                return Object.keys($scope.onlineUsers).length;
            };
        }
    ]
);
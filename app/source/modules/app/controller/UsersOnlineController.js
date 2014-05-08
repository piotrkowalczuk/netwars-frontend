angular.module('NWApp').controller(
    'UsersOnlineController',
    [
        '$scope',
        'User',
        function($scope, User) {
            $scope.onlineUsers = [];

            $scope.fetchOnlineUsers = function () {
                User.fetchOnlineUsers()
                    .success(function(onlineUsers) {
                        $scope.onlineUsers = onlineUsers;
                    });
            };
        }
    ]
);
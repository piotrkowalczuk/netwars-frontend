angular.module('NWApp').controller(
    'RightMenuController',
    [
        '$scope',
        'UserSession',
        function RightMenuController($scope, UserSession) {
            $scope.isLoggedIn = function () {
                return UserSession.isLogged();
            };
        }
    ]
);
angular.module('NWApp').controller('AuthenticationController',
    ['$scope', '$location', 'Auth', 'UserSession', function AuthenticationController($scope, $location, Auth, UserSession) {

        $scope.credentials = {
            email: null,
            password: null
        };

        $scope.user = {};

        $scope.login = function () {
            Auth.login($scope.credentials)
                .success(function(userData) {
                    UserSession.login(userData);
                });
        };

        $scope.logout = function () {
            Auth.logout(UserSession.getUserCredentials())
                .success(function() {
                    UserSession.logout();
                })
                .error(function(data, status) {
                    switch (status) {
                        case 404:
                            UserSession.logout();
                            break;
                    }
                });
        };

        $scope.isLoggedIn = function () {
            return UserSession.isLogged();
        };

        $scope.isActiveRoute = function(route) {
            if($location.path() === route) {
                return 'active';
            }
        };

        $scope.getUserName = function() {
            return UserSession.getUserProperty('name');
        };
    }]
);



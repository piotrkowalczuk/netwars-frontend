angular.module('NWApp').controller('AuthenticationController',
    ['$scope', '$location', 'Auth', 'User', function AuthenticationController($scope, $location, Auth, User) {

        $scope.credentials = {
            email: null,
            password: null
        }

        $scope.user = {};

        $scope.login = function () {
            Auth.login($scope.credentials)
                .success(function(userData) {
                    User.login(userData);
                });
        };

        $scope.logout = function () {
            Auth.logout(User.getUserCredentials())
                .success(function() {
                    User.login();
                });
        };

        $scope.isLoggedIn = function () {
            return User.isLogged();
        }

        $scope.isActiveRoute = function(route) {
            if($location.path() === route) {
                return 'active'
            }
        }

        $scope.getUserName = function() {
            return User.getUserProperty('name');
        }
    }]
);



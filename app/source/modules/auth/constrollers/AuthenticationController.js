angular.module('NWApp').controller('AuthenticationController',
    ['$scope', '$location', 'Auth', 'User', function AuthenticationController($scope, $location, Auth, User) {

        $scope.credentials = {
            email: null,
            password: null
        }

        $scope.loginAction = function () {
            Auth.login($scope.credentials)
                .success(function(userData) {
                    User.login(userData);
                });
        };

        $scope.logoutAction = function () {
            Auth.logout({pass: ''})
                .success(function(userData) {
                    //@todo
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
    }]
);



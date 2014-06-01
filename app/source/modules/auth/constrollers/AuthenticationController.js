angular.module('NWApp').controller('AuthenticationController',
    [
        '$scope',
        '$location',
        '$rootScope',
        'Auth',
        'UserSession',
        function AuthenticationController($scope, $location, $rootScope, Auth, UserSession) {

            $scope.credentials = {
                email: '',
                password: ''
            };

            $scope.user = {};

            $scope.login = function () {
                if ($scope.loginIsPossible()) {
                    Auth.login($scope.credentials)
                        .success(function(userData) {
                            UserSession.login(userData);
                        })
                        .error(function(data, status) {
                            console.log('błąd logowania');
                            $scope.$emit('flashMessage', 'warning', 'Błąd logowania. Email bądź hasło jest nie poprawne.');
                        });
                }
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

            $scope.loginIsPossible = function () {
                if ($scope.credentials.email.length > 0 && $scope.credentials.password.length > 0) {
                    return true;
                }

                return false;
            };

            $scope.isActiveRoute = function(route) {
                if($location.path() === route) {
                    return 'active';
                }
            };

            $scope.getUserName = function() {
                return UserSession.getUserProperty('name');
            };

            $scope.getUserId = function() {
                return UserSession.getUserProperty('id');
            };
        }
    ]
);



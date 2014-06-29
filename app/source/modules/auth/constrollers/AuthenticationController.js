angular.module('NWApp').controller('AuthenticationController',
    [
        '$scope',
        '$location',
        '$rootScope',
        '$route',
        'Auth',
        'UserSession',
        function AuthenticationController($scope, $location, $rootScope, $route, Auth, UserSession) {

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
                            $scope.$emit('flashMessage', 'info', 'Zostałeś zalogowany.');
                            $route.reload();
                        })
                        .error(function(data, status) {
                            $scope.$emit('flashMessage', 'warning', 'Błąd logowania. Email bądź hasło jest nie poprawne.');
                        });
                }
            };

            $scope.logout = function () {
                Auth.logout(UserSession.getUserCredentials())
                    .success(function() {
                        UserSession.logout();
                        $scope.$emit('flashMessage', 'info', 'Zostałeś wylogowany.');
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



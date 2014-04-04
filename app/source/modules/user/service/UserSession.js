angular.module('NWApp').factory('UserSession',
    [
        '$rootScope',
        '$location',
        '$cookieStore',
        function UserSession($rootScope, $location, $cookieStore) {

            var login = function(userData) {
                setUserData(userData);
                $rootScope.$broadcast('login');
                $location.path('/forum');
            }

            var logout = function() {
                removeUserData();
                $rootScope.$broadcast('logout');
                $location.path('/');
            }

            var getUserData = function() {
                return $cookieStore.get('userData');
            }

            var setUserData = function (userData) {
                $cookieStore.put('userData', userData);
            }

            var removeUserData = function () {
                $cookieStore.remove('userData');
            };

            var getUserProperty = function(property) {
                var userData = getUserData();

                if(userData) {
                    return userData[property];
                }

                return null;
            };

            var getUserCredentials = function() {
                var credentials = {
                    token: getUserProperty('token'),
                    id: getUserProperty('id')
                };

                return credentials;
            };

            var isLogged = function() {
                var apiToken = getUserProperty('token');
                var uid = getUserProperty('id');

                if(apiToken && uid) {
                    return true;
                }

                return false;
            };

            return {
                login: login,
                logout: logout,
                setUserData: setUserData,
                removeUserData: removeUserData,
                getUserData: getUserData,
                getUserProperty: getUserProperty,
                getUserCredentials: getUserCredentials,
                isLogged: isLogged
            }
        }
    ]
);
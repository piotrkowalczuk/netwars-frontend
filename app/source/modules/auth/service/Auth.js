angular.module('NWApp').factory('Auth',
    [
        '$http',
        function Auth($http) {
            var login = function login(loginCredentials) {
                return $http.post('/api/login', loginCredentials);
            };

            var logout = function logout(apiCredentials) {
                return $http.post('/api/logout', apiCredentials);
            };

            return {
                login: login,
                logout: logout
            };
}
    ]
);
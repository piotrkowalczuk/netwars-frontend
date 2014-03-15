angular.module('NWApp').factory('Auth',
    ['$http', function Auth($http) {

        var login = function (credentials) {
            return $http.post('/api/login', credentials);
        }

        return {
            login: login
        }
    }]
);
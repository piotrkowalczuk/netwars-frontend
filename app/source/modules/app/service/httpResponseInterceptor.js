angular.module('NWApp').factory(
    'HttpResponseInterceptor',
    [
        '$q',
        'UserSession',
        function($q, UserSession){
            return {
                'responseError': function(rejection) {
                    if(rejection.status === 401) {
                        UserSession.logout();
                        return rejection;
                    }

                    return $q.reject(rejection);
                },
                request: function($config) {
                    if(UserSession.isLogged()) {
                        $config.headers['Authorization'] = UserSession.getUserToken();
                    }

                    return $config;
                }
            }
        }
    ]
);

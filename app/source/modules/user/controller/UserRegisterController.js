angular.module('NWApp').controller(
    'UserRegisterController',
    [
        '$scope',
        'User',
        function UserRegisterController($scope, User)
        {
            $scope.user = {
                name: '',
                email: '',
                password: '',
                gaduGadu: ''
            };

            $scope.register = function () {
                User.createUser($scope.user)
                    .success(function(response) {
                        console.log(response);
                    });
            };
        }
    ]
);



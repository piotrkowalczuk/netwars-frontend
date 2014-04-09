angular.module('NWApp').controller(
    'UserRegisterController',
    [
        '$scope',
        '$location',
        'User',
        function UserRegisterController($scope, $location, User)
        {
            $scope.user = {
                name: '',
                email: '',
                plainPassword: '',
                gaduGadu: ''
            };

            $scope.register = function () {
                User.createUser($scope.user)
                    .success(function() {
                        $scope.$emit('flashMessage', 'success', 'Konto zostało utworzone poprawnie. Możesz się zaglogować.');
                        $location.path('/');
                    })
                    .error(function(){
                        $scope.$emit('flashMessage', 'warning', 'Coś poszło nie tak jak powinno.');
                    });
            };
        }
    ]
);



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
                plainPassword: ''
            };

            $scope.formErrors = {
                name: [],
                email: [],
                plainPassword: []
            };

            $scope.setFormErrorsDefault = function () {
                $scope.formErrors = {
                    name: [],
                    email: [],
                    plainPassword: []
                };
            };

            $scope.register = function () {
                $scope.setFormErrorsDefault();
                
                User.createUser($scope.user)
                    .success(function() {
                        $scope.$emit('flashMessage', 'success', 'Konto zostało utworzone poprawnie. Możesz się zaglogować.');
                        $location.path('/');
                    })
                    .error(function(errors){
                        angular.forEach(errors, function(value, key) {
                            angular.forEach(value.fieldNames, function(fieldName, key) {
                                $scope.formErrors[fieldName] = $scope.formErrors[fieldName] || [];
                                $scope.formErrors[fieldName].push(value.message);
                            });
                        });
                    });
            };
        }
    ]
);

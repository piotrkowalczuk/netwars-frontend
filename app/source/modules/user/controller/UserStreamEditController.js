angular.module('NWApp').controller(
    'UserStreamEditController',
    [
        '$scope',
        'UserStream',
        'UserSession',
        function UserStreamEditController($scope, UserStream, UserSession)
        {
            $scope.userStream = {
                type: 1,
                identifier: '',
                wingsOfLiberty: '',
                heartOfTheSwarm: '',
                leagueOfLegends: '',
                broodWar: '',
                other: ''
            };

            $scope.formErrors = {
                identifier: [],
                type: []
            };

            $scope.fetchUserStream = function () {
                UserStream.fetchUserStream()
                    .success(function(userStream) {
                        $scope.userStream = userStream;
                    });
            };

            $scope.createOrModifyPost = function () {
                UserStream.createOrModifyPost($scope.userStream)
                    .success(function(userStream) {
                        $scope.userStream = userStream;

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

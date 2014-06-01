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

            $scope.fetchUserStream = function () {
                UserStream.fetchUserStream()
                    .success(function(userStream) {
                        console.log(userStream);
                        $scope.userStream = userStream;
                    });
            };

            $scope.createOrModifyPost = function () {
                console.log($scope.userStream);
                UserStream.createOrModifyPost($scope.userStream)
                    .success(function(userStream) {
                        $scope.userStream = userStream;
                    });
            };
        }
    ]
);

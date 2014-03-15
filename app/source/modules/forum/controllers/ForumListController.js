angular.module('NWApp').controller('ForumListController',
    ['$scope', 'Forum', 'User', function ForumListController($scope, Forum, User) {

        $scope.forums = {};

        $scope.fetchForums = function () {
            Forum.fetchForums(User.getUserCredentials())
                .success(function(forums) {
                    $scope.forums = forums;
                });
        };

        /**
         * @param forumId
         */
        $scope.fetchTopicsForForum = function (forumId) {
            Forum.fetchForums(forumId, User.getUserCredentials())
                .success(function(forums) {
                    $scope.forums = forums;
                });
        };

        $scope.fetchForums();
    }]
);



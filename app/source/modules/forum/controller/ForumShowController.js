angular.module('NWApp').controller('ForumShowController',
    [
        '$scope',
        '$routeParams',
        'Forum',
        'Topic',
        function ForumShowController($scope, $routeParams, Forum, Topic) {
            $scope.forum = [];
            $scope.topics = [];

            $scope.fetchForum = function () {
                Forum.fetchForum($routeParams.id)
                    .success(function(forum) {
                        $scope.forum = forum;
                        Topic.fetchTopics(forum.id)
                            .success(function(topics) {
                                $scope.topics[forum.id] = topics;
                            });
                    });
            };

            $scope.hasForumTopics = function () {
                if ($scope.topics[$scope.forum.id]) {
                    return $scope.topics[$scope.forum.id].length > 0
                }

                return false;
            };
        }
    ]
);



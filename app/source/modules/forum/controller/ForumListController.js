angular.module('NWApp').controller('ForumListController',
    ['$scope', 'Forum', 'Topic', function ForumListController($scope, Forum, Topic) {

        $scope.forums = [];
        $scope.topics = [];

        $scope.fetchForums = function () {
            Forum.fetchForums()
                .success(function(forums) {
                    $scope.forums = forums;
                    angular.forEach($scope.forums, function(forum, key){
                        Topic.fetchTopics(forum.id)
                            .success(function(topics) {
                                $scope.topics[forum.id] = topics;
                            });
                    });
                });
        };

        $scope.hasForumTopics = function (forumId) {
            if ($scope.topics[forumId]) {
                return $scope.topics[forumId].length > 0
            }

            return false;
        }
    }]
);



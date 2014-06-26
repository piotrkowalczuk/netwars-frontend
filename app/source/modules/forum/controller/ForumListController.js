angular.module('NWApp').controller('ForumListController',
    [
        '$scope',
        'Forum',
        'Topic',
        'UserSession',
        function ForumListController($scope, Forum, Topic, UserSession) {

            $scope.forums = [];
            $scope.topics = [];
            $scope.user = UserSession;

            $scope.fetchForums = function () {
                Forum.fetchForums()
                    .success(function(forums) {
                        $scope.forums = forums;
                        angular.forEach($scope.forums, function(forum, key){
                            Topic.fetchTopics(forum.id)
                                .success(function(topics) {
                                    if(topics) {
                                        $scope.topics[forum.id] = topics;
                                    }
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
        }
    ]
);



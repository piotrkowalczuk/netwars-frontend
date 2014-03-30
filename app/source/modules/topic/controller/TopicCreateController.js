angular.module('NWApp').controller(
    'TopicCreateController',
    [
        '$scope',
        '$routeParams',
        '$location',
        'Post',
        'Topic',
        'UserSession',
        'Forum',
        function TopicCreateController($scope, $routeParams, $location, Post, Topic, UserSession, Forum)
        {
            $scope.forums = [];
            $scope.topic = {
                post: {
                    content: ''
                },
                topic: {
                    name: '',
                    forumId: null
                }
            }

            $scope.fetchForums = function () {
                Forum.fetchForums()
                    .success(function(forums) {
                        $scope.forums = forums;
                    });
            };

            $scope.createTopic = function () {
                $scope.topic.post.content = $scope.topic.post.content.replace(new RegExp('\r?\n','g'), '<br />');
                Topic.createTopic($scope.topic)
                    .success(function(topic) {
                        $location.path('/topic/'+topic.id);
                        $scope.$apply();
                    });
            }
        }
    ]
);



angular.module('NWApp').controller(
    'TopicShowController',
    [
        '$scope',
        '$routeParams',
        '$sce',
        '$filter',
        'Post',
        'Topic',
        'UserSession',
        'Forum',
        function TopicShowController($scope, $routeParams, $sce, $filter, Post, Topic, UserSession, Forum)
        {
            $scope.forum = {};
            $scope.topic = {};
            $scope.posts = [];
            $scope.user = UserSession;
            $scope.post = {
                content: ""
            };

            $scope.fetchTopic = function () {
                Topic.fetchTopic($routeParams.id)
                    .success(function(topic) {
                        $scope.topic = topic;
                        $scope.post.topicId = topic.id;
                        $scope.fetchForum(topic.forumId);
                    });
            };

            $scope.fetchPosts = function () {
                Post.fetchPosts($routeParams.id)
                    .success(function(posts) {
                        $scope.posts = posts;
                    });
            };

            $scope.fetchForum = function (forumId) {
                Forum.fetchForum(forumId)
                    .success(function(forum) {
                        $scope.forum = forum;
                    });
            };

            $scope.createPost = function () {
                if($scope.post.content) {
                    $scope.post.content = $scope.post.content.replace(new RegExp('\r?\n','g'), '<br />');
                    Post.createPost($scope.post)
                        .success(function(post) {
                            $scope.posts.push(post);
                            $scope.post = {
                                content: ""
                            };
                        });
                } else {
                    console.log($scope.post.content);
                }
            };

            $scope.toTrusted = function(htmlCode) {
                return $sce.trustAsHtml($filter('parseUrl')(htmlCode));
            }
        }
    ]
);



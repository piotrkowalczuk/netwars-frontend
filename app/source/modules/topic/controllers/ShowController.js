angular.module('NWApp').controller(
    'ShowController',
    [
        '$scope',
        '$routeParams',
        '$sce',
        'Post',
        'Topic',
        'User',
        'Forum',
        function ShowController($scope, $routeParams, $sce, Post, Topic, User, Forum)
        {
            $scope.forum = {};
            $scope.topic = {};
            $scope.posts = [];
            $scope.user = User;
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
                return $sce.trustAsHtml(htmlCode);
            }
        }
    ]
);



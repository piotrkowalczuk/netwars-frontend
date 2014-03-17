angular.module('NWApp').controller('TopicController',
    ['$scope', '$routeParams', 'Post', 'Topic', 'User', function TopicController($scope, $routeParams, Post, Topic, User) {

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
                });
        };

        $scope.fetchPosts = function () {
            Post.fetchPosts($routeParams.id)
                .success(function(posts) {
                    $scope.posts = posts;
                });
        };

        $scope.createPost = function () {
            if($scope.post.content) {
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
    }]
);



angular.module('NWApp').controller(
    'TopicShowController',
    [
        '$scope',
        '$routeParams',
        '$sce',
        '$filter',
        '$location',
        '$anchorScroll',
        'Post',
        'Topic',
        'UserSession',
        'Forum',
        function TopicShowController($scope, $routeParams, $sce, $filter, $location, $anchorScroll, Post, Topic, UserSession, Forum) {
            $scope.forum = {};
            $scope.topic = {};
            $scope.posts = [];
            $scope.nbOfNewPosts = null;
            $scope.user = UserSession;
            $scope.post = {
                content: ""
            };


            $scope.fetchTopic = function () {
                Topic.fetchTopic($routeParams.id)
                    .success(function (topic) {
                        $scope.topic = topic;
                        $scope.post.topicId = topic.id;
                        $scope.fetchPosts();
                        $scope.fetchForum(topic.forumId);
                    });
            };

            $scope.fetchPosts = function () {
                Post.fetchPosts($routeParams.id)
                    .success(function (posts) {
                        $scope.calculateNbOfNewPosts(posts);
                        $scope.posts = posts;
                    });
            };

            $scope.fetchForum = function (forumId) {
                Forum.fetchForum(forumId)
                    .success(function (forum) {
                        $scope.forum = forum;
                    });
            };

            $scope.calculateNbOfNewPosts = function (posts) {
                if ($scope.topic.userTopic) {
                    $scope.nbOfNewPosts = posts.length - $scope.topic.userTopic.postSeen;
                    return
                }

                $scope.nbOfNewPosts = posts.length;
            };

            $scope.createPost = function () {
                if ($scope.post.content) {
                    $scope.post.content = $scope.escapeNewLines($scope.post.content);
                    Post.createPost($scope.post)
                        .success(function (post) {
                            $scope.posts.push(post);
                            $scope.post = {
                                content: ""
                            };
                            $scope.fetchPosts();
                        });
                }
            };

            $scope.saveChanges = function (post) {
                var originalPost = post;
                if (post.modifiedContent) {
                    Post.modifyPost(post.id, {content: post.modifiedContent})
                        .success(function (post) {
                            originalPost.content = post.content;
                            originalPost.editInProgress = false;
                            originalPost.modifiedContent = '';
                        });
                }
            };

            $scope.parsePost = function (text) {
                var parsedHtml = '';
                parsedHtml = $filter('parseYoutubeUrl')(text);
                parsedHtml = $filter('parseUrl')(parsedHtml);
                parsedHtml = $filter('newLine')(parsedHtml);
                parsedHtml = $filter('parseQuote')(parsedHtml, $scope.posts);
                return $sce.trustAsHtml(parsedHtml);
            };

            $scope.isEditable = function (post) {
                return post.createdAgo < (5 * 60) && post.authorId === UserSession.getUserProperty('id');
            };

            $scope.showEditForm = function (post) {
                post.editInProgress = true;
                post.modifiedContent = $scope.unescapeNewLines(post.content);
            };

            $scope.cancelEdit = function (post) {
                post.editInProgress = false;
                post.modifiedContent = '';
            };

            $scope.escapeNewLines = function (string) {
                return string.replace(new RegExp('/\r?\n/', 'g'), '\\n')
            };

            $scope.unescapeNewLines = function (string) {
                return string.replace(new RegExp('\\n', 'g'), '\n')
            };
        }
    ]
);



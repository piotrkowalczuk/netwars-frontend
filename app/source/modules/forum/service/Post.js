angular.module('NWApp').factory('Post',
    ['$http', 'User', function Post($http, User) {
        var fetchPost = function fetchTopic(postId) {
            return $http({
                url: '/api/post/'+postId,
                method: "GET"
            });
        };

        var fetchPosts = function fetchTopics(topicId) {
            return $http({
                url: '/api/posts/'+topicId,
                method: "GET"
            });
        };

        var createPost = function createPost(data) {
            return $http({
                url: '/api/post',
                method: "POST",
                params: User.getUserCredentials(),
                data: data
            });
        };

        return {
            fetchPost: fetchPost,
            fetchPosts: fetchPosts,
            createPost: createPost
        }
    }]
);
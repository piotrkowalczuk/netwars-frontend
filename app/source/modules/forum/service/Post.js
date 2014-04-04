angular.module('NWApp').factory('Post',
    ['$http', 'UserSession', function Post($http, UserSession) {
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
                params: UserSession.getUserCredentials(),
                data: data
            });
        };

        var modifyPost = function(postId, data) {
            return $http({
                method: 'PATCH',
                url: '/api/post/'+postId,
                params: UserSession.getUserCredentials(),
                data: data
            });
        };

        return {
            fetchPost: fetchPost,
            fetchPosts: fetchPosts,
            createPost: createPost,
            modifyPost: modifyPost
        }
    }]
);
angular.module('NWApp').factory('Post',
    [
        '$http',
        function Post($http) {
            var fetchPost = function fetchTopic(postId) {
                return $http({
                    url: '/api/post/'+postId,
                    method: "GET"
                });
            };

            var fetchPosts = function fetchTopics(topicId) {
                return $http({
                    url: '/api/topic/'+topicId+'/posts',
                    method: "GET"
                });
            };

            var createPost = function createPost(data) {
                return $http({
                    url: '/api/post',
                    method: "POST",
                    data: data
                });
            };

            var modifyPost = function(postId, data) {
                return $http({
                    method: 'PATCH',
                    url: '/api/post/'+postId,
                    data: data
                });
            };

            return {
                fetchPost: fetchPost,
                fetchPosts: fetchPosts,
                createPost: createPost,
                modifyPost: modifyPost
            };
        }
    ]
);
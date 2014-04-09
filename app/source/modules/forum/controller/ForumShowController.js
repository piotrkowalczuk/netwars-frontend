angular.module('NWApp').controller('ForumShowController',
    [
        '$scope',
        '$routeParams',
        '$location',
        'Forum',
        'Topic',
        function ForumShowController($scope, $routeParams, $location, Forum, Topic) {
            if (!$location.search().page) {
                $location.search('page', "1");
            }

            $scope.forum = [];
            $scope.topics = [];
            $scope.search = {};
            $scope.search.page = parseInt($location.search().page);

            $scope.fetchForum = function () {
                Forum.fetchForum($routeParams.id)
                    .success(function(forum) {
                        $scope.forum = forum;

                        var params = {
                            limit: 20,
                            offset: ($scope.search.page - 1) * 20
                        };

                        Topic.fetchTopics(forum.id, params)
                            .success(function(topics) {
                                $scope.topics[forum.id] = topics;
                            });
                    });
            };

            $scope.hasForumTopics = function () {
                if ($scope.topics[$scope.forum.id]) {
                    return $scope.topics[$scope.forum.id].length > 0
                }

                return false;
            };

            $scope.nextPage = function() {
                $scope.search.page += 1;

                return $scope.changePage();
            };

            $scope.previousPage = function() {
                if ($scope.search.page < 2) {
                    $scope.search.page = 1;
                } else {
                    $scope.search.page -= 1;
                }

                return $scope.changePage();
            };

            $scope.changePage = function() {
                $location.search('page', $scope.search.page);
                $scope.fetchForum();

                return 0;
            };
        }
    ]
);



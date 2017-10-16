'use strict';

angular.module('myApp.post', [
    'ngRoute',
    'myApp.post.services',
    'myApp.post.filters',
    'myApp.posts-view.component',
    'myApp.user.services'
])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/posts', {

        template: '<posts-view posts="$resolve.posts"' +
                              'users="$resolve.users"' +
                              'on-post-group="$rootCtrl.onPostGroup"' +
                              'grouping-value="$rootCtrl.groupingValue"' +
                              'on-post-sort="$rootCtrl.onPostSort"' +
                              'sort-value="$rootCtrl.sortValue"></posts-view>',

        resolve: {
            posts: function(Post){
                return Post.getPosts().then(function(response){
                    return response.data;
                });
            },
            users: function(User){
                return User.getUsers().then(function(response){
                    return response.data;
                });
            }
        }
    });
}]);
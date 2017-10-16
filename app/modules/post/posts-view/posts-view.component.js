'use strict';

angular.module('myApp.posts-view.component', [
    'myApp.posts-sidebar.component',
    'myApp.posts-ungrouped-view.component',
    'myApp.posts-grouped-view.component'
])
.component('postsView', {
    templateUrl: 'modules/post/posts-view/posts-view.component.html',
    bindings: {
        posts: '<',
        users: '<',
        onPostSort: '<',
        sortValue: '<',
        onPostGroup: '<',
        groupingValue: '<'
    },
    controller: function() {
        var self = this;

        this.getAuthor = function(post){
            return self.users.find(function(user){
                return user.id === post.userId;
            });
        };
    }
});
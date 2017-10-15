'use strict';

angular.module('myApp.posts-view.component', [])
.component('postsView', {
    templateUrl: 'modules/post/posts-view/posts-view.component.html',
    bindings: {
        posts: '<',
        users: '<',
        onPostSort: '<',
        sortValue: '<'
    },
    controller: function() {
        var self = this;

        this.getAuthor = function(post){
            return this.users.find(function(user){
                return user.id === post.userId;
            });
        };
    }
});
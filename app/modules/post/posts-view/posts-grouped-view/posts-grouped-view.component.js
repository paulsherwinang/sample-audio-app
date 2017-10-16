'use strict';

angular.module('myApp.posts-grouped-view.component', [
    'myApp.post-group.component',
    'myApp.post-entry.component'
])
.component('postsGroupedView', {
    templateUrl: 'modules/post/posts-view/posts-grouped-view/posts-grouped-view.component.html',
    bindings: {
        posts: '<',
        users: '<',
        getAuthor: '&',
        sortValue: '<',
        groupingValue: '<'
    },
    controller: function() {
        var self = this;

        this.getUsername = function(userId) {
            var user = self.users.find(function(user) {
                return user.id.toString() === userId;
            });

            return user.username;
        };
    }
});
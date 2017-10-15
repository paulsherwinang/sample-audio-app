'use strict';

angular.module('myApp.posts-view.component', [])
.component('postsView', {
    templateUrl: 'modules/post/posts-view/posts-view.component.html',
    bindings: {
        posts: '<',
        onPostSort: '<',
        sortValue: '<'
    }
});
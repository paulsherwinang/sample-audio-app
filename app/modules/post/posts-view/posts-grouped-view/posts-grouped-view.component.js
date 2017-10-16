'use strict';

angular.module('myApp.posts-grouped-view.component', [
    'myApp.post-group.component',
    'myApp.post-entry.component'
])
.component('postsGroupedView', {
    templateUrl: 'modules/post/posts-view/posts-grouped-view/posts-grouped-view.component.html',
    bindings: {
        posts: '<',
        getAuthor: '&',
        sortValue: '<',
        groupingValue: '<'
    }
});
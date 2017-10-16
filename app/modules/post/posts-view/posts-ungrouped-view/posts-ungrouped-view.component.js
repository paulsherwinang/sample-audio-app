'use strict';

angular.module('myApp.posts-ungrouped-view.component', [
    'myApp.post-entry.component'
])
.component('postsUngroupedView', {
    templateUrl: 'modules/post/posts-view/posts-ungrouped-view/posts-ungrouped-view.component.html',
    bindings: {
        posts: '<',
        getAuthor: '&',
        groupingValue: '<',
        sortValue: '<'
    }
});
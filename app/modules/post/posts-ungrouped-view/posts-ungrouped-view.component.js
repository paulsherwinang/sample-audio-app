'use strict';

angular.module('myApp.posts-ungrouped-view.component', [])
.component('postsUngroupedView', {
    templateUrl: 'modules/post/posts-ungrouped-view/posts-ungrouped-view.component.html',
    bindings: {
        posts: '<',
        getAuthor: '&',
        groupingValue: '<',
        sortValue: '<'
    }
});
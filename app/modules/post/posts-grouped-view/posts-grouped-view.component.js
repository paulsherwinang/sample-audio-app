'use strict';

angular.module('myApp.posts-grouped-view.component', [])
.component('postsGroupedView', {
    templateUrl: 'modules/post/posts-grouped-view/posts-grouped-view.component.html',
    bindings: {
        posts: '<',
        getAuthor: '&',
        sortValue: '<',
        groupingValue: '<'
    }
});
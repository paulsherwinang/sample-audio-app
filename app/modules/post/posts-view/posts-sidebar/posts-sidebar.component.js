'use strict';

angular.module('myApp.posts-sidebar.component', [
    'myApp.post-sort.component',
    'myApp.post-group.component',
])
.component('postsSidebar', {
    templateUrl: 'modules/post/posts-view/posts-sidebar/posts-sidebar.component.html',
    bindings: {
        onPostSort: '&',
        sortValue: '<',
        onPostGroup: '&',
        groupingValue: '<'
    }
});
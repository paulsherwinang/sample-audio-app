'use strict';

angular.module('myApp.posts-sidebar.component', [])
.component('postsSidebar', {
    templateUrl: 'modules/post/posts-sidebar/posts-sidebar.component.html',
    bindings: {
        onPostSort: '&',
        sortValue: '<',
        onPostGroup: '&',
        groupingValue: '<'
    }
});
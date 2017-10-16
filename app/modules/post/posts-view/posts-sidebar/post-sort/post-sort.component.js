'use strict';

angular.module('myApp.post-sort.component', [])
    .component('postSort', {
        templateUrl: 'modules/post/posts-view/posts-sidebar/post-sort/post-sort.component.html',
        bindings: {
            onSelectChange: '&',
            sortValue: '<'
        }
    });
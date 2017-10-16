'use strict';

angular.module('myApp.post-group.component', [])
.component('postGroup', {
    templateUrl: 'modules/post/posts-view/posts-sidebar/post-group/post-group.component.html',
    bindings: {
        onInputChange: '&',
        groupingValue: '<'
    }
});
'use strict';

angular.module('myApp.post-sort.component', [])
    .component('postSortComponent', {
        templateUrl: 'modules/post/post-sort/post-sort.component.html',
        bindings: {
            onSelectChange: '&',
            sortValue: '<'
        }
    });
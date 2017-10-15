'use strict';

angular.module('myApp.post.services', [])
.service('Post', function($http){
    this.getPosts = function() {
        return $http.get('https://jsonplaceholder.typicode.com/posts');
    };
});
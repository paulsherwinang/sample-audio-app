'use strict';

angular.module('myApp.user.services', [])
.service('User', function($http) {
    this.getUsers = function(){
        return $http.get('https://jsonplaceholder.typicode.com/users');
    };
});
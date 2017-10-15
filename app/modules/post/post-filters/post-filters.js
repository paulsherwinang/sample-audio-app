'use strict';

angular.module('myApp.post.filters', [])
    .filter('groupBy', function(){
        return function(users, key) {
            var o = {};

            users.forEach(function(user) {
                if(!o[user[key]]){
                    o[user[key]] = [user];
                } else {
                    o[user[key]].push(user);
                }
            });

            return o;
        };
    });
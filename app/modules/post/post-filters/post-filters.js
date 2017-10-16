'use strict';

angular.module('myApp.post.filters', [])
    .filter('groupBy', function(){
        return function(input, key) {
            var o = {};

            input.forEach(function(user) {
                if(!o[user[key]]){
                    o[user[key]] = [user];
                } else {
                    o[user[key]].push(user);
                }
            });

            return o;
        };
    });
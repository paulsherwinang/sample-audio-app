'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.header',
    'myApp.post',
    'myApp.audio'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/posts'});
}])

.controller('RootController', function() {
    var self = this;

    this.sortValue = '';

    this.onPostSort = function(sortValue) {
        self.sortValue = sortValue;
    };
});
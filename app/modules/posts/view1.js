'use strict';

angular.module('myApp.posts', [
    'ngRoute',
    'myApp.posts.services'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/posts', {
    templateUrl: 'modules/posts/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);
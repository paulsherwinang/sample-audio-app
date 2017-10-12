'use strict';

angular.module('myApp.audio', [
    'ngRoute',
    'myApp.audio-view.component',
    'myApp.audio-player.component'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/audio', {
    template: '<audio-view></audio-view>'
  });
}])

.controller('View2Ctrl', [function() {

}]);
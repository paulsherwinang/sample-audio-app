'use strict';

angular.module('myApp.audio', [
    'ngRoute',
    'myApp.audio.services',
    'myApp.audio-view.component',
])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/audio', {
        template: '<audio-view audios="$resolve.audioFiles"></audio-view>',
        resolve: {
            audioFiles: function(Audio) {
                return [
                    new Audio('New Wave Drums', 'https://static.bandlab.com/soundbanks/previews/new-wave-kit.ogg'),
                    new Audio('Organ Synth', 'https://static.bandlab.com/soundbanks/previews/synth-organ.ogg')
                ];
            }
        }
    });
}]);
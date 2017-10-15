'use strict';

angular.module('myApp.audio', [
    'ngRoute',
    'myApp.audio-view.component',
    'myApp.audio-player.component',
    'myApp.audio-entry.component'
])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/audio', {
        template: '<audio-view files="$resolve.audioFiles"></audio-view>',
        resolve: {
            audioFiles: function(audioData) {
                return audioData;
            }
        }
    });
}])

.value('audioData', [
    { title: 'New Wave Drums', url: 'https://static.bandlab.com/soundbanks/previews/new-wave-kit.ogg' },
    { title: 'Organ Synth', url: 'https://static.bandlab.com/soundbanks/previews/synth-organ.ogg' }
]);
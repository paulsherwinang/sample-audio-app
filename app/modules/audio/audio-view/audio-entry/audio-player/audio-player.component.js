angular.module('myApp.audio-player.component', [])
.component('audioPlayer', {
    templateUrl: 'modules/audio/audio-view/audio-entry/audio-player/audio-player.component.html',
    bindings: {
        fileUrl: '@'
    }
});
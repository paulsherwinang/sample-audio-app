angular.module('myApp.audio-entry.component', [
    'myApp.audio-player.component'
])
.component('audioEntry', {
    templateUrl: 'modules/audio/audio-view/audio-entry/audio-entry.component.html',
    bindings: {
        audio: '<'
    }
});
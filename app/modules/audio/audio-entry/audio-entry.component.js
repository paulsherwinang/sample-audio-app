angular.module('myApp.audio-entry.component', [])
.component('audioEntry', {
    templateUrl: 'modules/audio/audio-entry/audio-entry.component.html',
    bindings: {
        audio: '<'
    }
});
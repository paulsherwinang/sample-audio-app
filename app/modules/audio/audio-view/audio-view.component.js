'use strict';

angular.module('myApp.audio-view.component', [
    'myApp.audio-entry.component'
])
.component('audioView', {
    templateUrl: 'modules/audio/audio-view/audio-view.component.html',
    bindings: {
        audios: '<'
    }
});
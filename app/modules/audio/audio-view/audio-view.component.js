'use strict';

angular.module('myApp.audio-view.component', [])
.component('audioView', {
    templateUrl: 'modules/audio/audio-view/audio-view.component.html',
    bindings: {
        audios: '<'
    }
});
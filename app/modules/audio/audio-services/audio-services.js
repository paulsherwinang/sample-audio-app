angular.module('myApp.audio.services', [])
.service('Audio', function(){
    return function(title, url){
        this.title = title;
        this.url = url;
    };
});
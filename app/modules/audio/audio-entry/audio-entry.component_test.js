'use strict';

describe('audio-entry.component module', function() {
    var elem, $scope;

    beforeEach(module('app.templates'));
    beforeEach(module('myApp.audio-entry.component'));
    beforeEach(module('myApp.audio-player.component'));

    beforeEach(inject(function($compile, $rootScope){
        $scope = $rootScope.$new(true);

        $scope.audio = {
            name: 'name',
            url: 'http://url.com'
        };

        var html = '<audio-entry audio="audio"></audio-view>';
        elem = $compile(html)($scope);
        $scope.$digest();
    }));

    it('should render element correctly', function() {
        expect($(elem).find('.audio-name').html()).toBe($scope.audio.name);
        expect($(elem).find('audio-player').children().length).not.toBe(0);
    });

});
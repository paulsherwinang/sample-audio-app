'use strict';

describe('audio-view.component module', function() {
    var elem, $scope;

    beforeEach(module('app.templates'));
    beforeEach(module('myApp.audio.services'));
    beforeEach(module('myApp.audio-view.component'));

    beforeEach(inject(function($compile, $rootScope, Audio){
        $scope = $rootScope.$new(true);
        $scope.audios = [
            new Audio('Name1', 'Url1'),
            new Audio('Name2', 'Url2')
        ];
        var html = '<audio-view audios="audios"></audio-view>';
        elem = $compile(html)($scope);
        $scope.$digest();
    }));

    it('should render element correctly', function() {
        expect($(elem).find('audio-entry').length).toBe(2);
    });

});
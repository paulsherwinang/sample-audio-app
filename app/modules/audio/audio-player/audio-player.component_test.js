'use strict';

describe('audio-player.component module', function() {
    var elem, $scope;

    beforeEach(module('app.templates'));
    beforeEach(module('myApp.audio-player.component'));

    beforeEach(inject(function($compile, $rootScope){
        $scope = $rootScope.$new(true);
        $scope.url = "url";
        var html = '<audio-player file-url="{{url}}"></audio-view>';
        elem = $compile(html)($scope);
        $scope.$digest();
    }));

    it('should render element correctly', function() {
        expect($(elem).find('source').attr('src')).toBe($scope.url);
    });

});
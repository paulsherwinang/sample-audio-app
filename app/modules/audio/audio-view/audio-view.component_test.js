'use strict';

describe('audio-view.component module', function() {
    var elem, $scope;

    beforeEach(module('app.templates'));
    beforeEach(module('myApp.audio-view.component'));

    beforeEach(inject(function($compile, $rootScope){
        $scope = $rootScope.$new(true);
        $scope.audios = [

        ];
        var html = '<audio-view file-url="{{url}}"></audio-view>';
        elem = $compile(html)($scope);
        $scope.$digest();
    }));

    it('should render element correctly', function() {
        expect($(elem).find('source').attr('src')).toBe($scope.url);
    });

});
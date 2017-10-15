'use strict';

describe('posts-view.component module', function() {
    var elem, $scope;

    beforeEach(module('app.templates'));
    beforeEach(module('myApp.post-entry.component'));
    beforeEach(module('myApp.posts-view.component'));

    beforeEach(inject(function($compile, $rootScope){
        $scope = $rootScope.$new(true);

        $scope.posts = [
            { title: 'title1', body: 'body1' },
            { title: 'title2', body: 'body2' }
        ];

        var html = '<posts-view posts="posts"></posts-view>';
        elem = $compile(html)($scope);
        $scope.$digest();
    }));

    it('should render element correctly', function() {
        expect($(elem).find('post-entry').length).toBe(2);
    });

});
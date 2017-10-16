'use strict';

describe('post-entry.component module', function() {
    var elem, $scope;

    beforeEach(module('app.templates'));
    beforeEach(module('myApp.post-entry.component'));

    beforeEach(inject(function($compile, $rootScope){
        $scope = $rootScope.$new(true);
        $scope.post = {
            title: 'title',
            body: 'body'
        };
        var html = '<post-entry post="post"></post-entry>';
        elem = $compile(html)($scope);
        $scope.$digest();
    }));

    it('should render element correctly', function() {
        expect($(elem).find('.post-title').html()).toBe($scope.post.title);
        expect($(elem).find('.post-body').html()).toBe($scope.post.body);
    });

});
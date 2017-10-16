'use strict';

describe('posts-ungrouped-view.component module', function() {
    var elem, $scope, $componentController;

    beforeEach(module('app.templates'));
    beforeEach(module('myApp.posts-ungrouped-view.component'));

    beforeEach(inject(function($compile, $rootScope, _$componentController_){
        $componentController = _$componentController_;
        $scope = $rootScope.$new(true);

        $scope.posts = [
            { title: 'title1', body: 'body1' },
            { title: 'title2', body: 'body2' }
        ];

        $scope.users = [];

        var html = '<posts-ungrouped-view posts="posts"></posts-ungrouped-view>';
        elem = $compile(html)($scope);
        $scope.$digest();
    }));

    it('should render element correctly', function() {
        expect($(elem).find('post-entry').length).toBe(2);
    });
});
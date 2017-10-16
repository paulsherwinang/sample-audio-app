'use strict';

describe('posts-grouped-view.component module', function() {
    var elem, $scope, $componentController;

    beforeEach(module('app.templates'));
    beforeEach(module('myApp.posts-grouped-view.component'));
    beforeEach(module('myApp.post.filters'));

    beforeEach(inject(function($compile, $rootScope, _$componentController_){
        $componentController = _$componentController_;
        $scope = $rootScope.$new(true);

        $scope.posts = [
            { id: 1, title: 'title1', body: 'body1', userId: 1},
            { id: 2, title: 'title2', body: 'body2', userId: 2},
            { id: 3, title: 'title3', body: 'body3', userId: 2}
        ];

        $scope.groupingValue = 'userId';

        var html = '<posts-grouped-view posts="posts" grouping-value="groupingValue"></posts-grouped-view>';
        elem = $compile(html)($scope);
        $scope.$digest();
    }));

    it('should render element correctly', function() {
        expect($(elem).find('.post-group').length).toBe(2);
        expect($(elem).find('post-entry').length).toBe(3);
    });
});
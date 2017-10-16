'use strict';

describe('posts-grouped-view.component module', function() {
    var elem, $scope, $compile, $rootScope, $componentController;

    beforeEach(module('app.templates'));
    beforeEach(module('myApp.posts-grouped-view.component'));
    beforeEach(module('myApp.post.filters'));

    beforeEach(inject(function(_$compile_, _$rootScope_, _$componentController_){
        $componentController = _$componentController_;
        $rootScope = _$rootScope_;
        $compile = _$compile_;
    }));

    it('should getUsername correctly', function() {
        var users = [
            { id: 1, username: 'yes' },
            { id: 2, username: 'no' },
            { id: 3, username: 'no' }
        ];

        var bindings = { users: users };
        var ctrl = $componentController('postsGroupedView', null, bindings);
        expect(ctrl.getUsername('1')).toBe('yes');
    });

    it('should render element correctly', function() {
        $scope = $rootScope.$new(true);

        $scope.posts = [
            { id: 1, title: 'title1', body: 'body1', userId: 1},
            { id: 2, title: 'title2', body: 'body2', userId: 2},
            { id: 3, title: 'title3', body: 'body3', userId: 2}
        ];

        $scope.users = [{id: 1, username: 'hello'}, {id: 2, username: 'hello'}];

        $scope.groupingValue = 'userId';

        var html = '<posts-grouped-view posts="posts" users="users" grouping-value="groupingValue"></posts-grouped-view>';
        elem = $compile(html)($scope);
        $scope.$digest();

        expect($(elem).find('.post-group').length).toBe(2);
        expect($(elem).find('post-entry').length).toBe(3);
    });
});
'use strict';

describe('posts-view.component module', function() {
    var elem, $scope, $componentController;

    beforeEach(module('app.templates'));
    beforeEach(module('myApp.post-entry.component'));
    beforeEach(module('myApp.posts-view.component'));

    beforeEach(inject(function($compile, $rootScope, _$componentController_){
        $componentController = _$componentController_;
        $scope = $rootScope.$new(true);

        $scope.posts = [
            { title: 'title1', body: 'body1' },
            { title: 'title2', body: 'body2' }
        ];

        $scope.users = [];

        var html = '<posts-view posts="posts" users="users"></posts-view>';
        elem = $compile(html)($scope);
        $scope.$digest();
    }));

    it('should getAuthor correctly', function() {
        var users = [
            {id: 1, username: 'Author'},
            {id: 2, username: 'name'}
        ];

        var post = {userId: 1};
        var bindings = { post: post, users: users };

        var ctrl = $componentController('postsView', null, bindings);
        var author = ctrl.getAuthor(post);
        expect(author.username).toBe('Author');
    });
});
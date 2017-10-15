'use strict';

describe('post.services module', function() {
    var $http, Post;

    beforeEach(module('app.templates'));
    beforeEach(module('myApp.post.services'));

    beforeEach(inject(function(_Post_, _$http_){
        Post = _Post_;
        $http = _$http_;
    }));

    it('should invoke getPosts correctly', function() {
        spyOn($http, 'get');
        Post.getPosts();
        expect($http.get.calls.argsFor(0)).toMatch(/posts/);
    });

});
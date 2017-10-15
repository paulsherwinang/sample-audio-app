'use strict';

describe('user.services module', function() {
    var $http, User;

    beforeEach(module('app.templates'));
    beforeEach(module('myApp.user.services'));

    beforeEach(inject(function(_User_, _$http_){
        User = _User_;
        $http = _$http_;
    }));

    it('should invoke getUsers correctly', function() {
        spyOn($http, 'get');
        User.getUsers();
        expect($http.get.calls.argsFor(0)).toMatch(/users/);
    });

});
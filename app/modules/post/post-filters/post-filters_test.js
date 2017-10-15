describe('myApp.post groupBy filter', function() {
    var groupByFilter;

    beforeEach(module('app.templates'));
    beforeEach(module('myApp.post.filters'));

    beforeEach(inject(function(_$filter_){
        groupByFilter = _$filter_('groupBy');
    }));

    it('should groupBy key passed in', function() {
        var posts = [
            { userId: 1 }, { userId: 1 },
            { userId: 2 },
            { userId: 4 },
            { userId: 5 }
        ];

        expect(groupByFilter(posts, 'userId')).toEqual({
            '1': [ { userId: 1 }, { userId: 1 } ],
            '2': [ { userId: 2 } ],
            '4': [ { userId: 4 } ],
            '5': [ { userId: 5 } ]
        });
    });

});

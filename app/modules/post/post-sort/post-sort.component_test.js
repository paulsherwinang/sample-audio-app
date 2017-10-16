'use strict';

describe('post-sort.component module', function() {
    var $componentController;

    beforeEach(module('app.templates'));
    beforeEach(module('myApp.post-sort.component'));

    beforeEach(inject(function(_$componentController_){
        $componentController = _$componentController_;
    }));

    it('should call onSelectChange with changed value', function() {
        var term = 'Hello';
        var bindings = {
            onSelectChange: jasmine.createSpy('onSelectChange'),
            sortValue: ''
        };

        var ctrl = $componentController('postSort', null, bindings);
        ctrl.sortValue = term;
        ctrl.onSelectChange({ sortValue: ctrl.sortValue });
        expect(ctrl.onSelectChange).toHaveBeenCalledWith({
            sortValue: term
        });
    });
});
'use strict';

describe('post-sort.component module', function() {
    var $componentController;

    beforeEach(module('app.templates'));
    beforeEach(module('myApp.post-group.component'));

    beforeEach(inject(function(_$componentController_){
        $componentController = _$componentController_;
    }));

    it('should call onInputChange with changed value', function() {
        var term = 'Hello';
        var bindings = {
            onInputChange: jasmine.createSpy('onInputChange'),
            groupingValue: ''
        };

        var ctrl = $componentController('postGroup', null, bindings);
        ctrl.groupingValue = term;
        ctrl.onInputChange({ groupingValue: ctrl.groupingValue });
        expect(ctrl.onInputChange).toHaveBeenCalledWith({
            groupingValue: term
        });
    });
});
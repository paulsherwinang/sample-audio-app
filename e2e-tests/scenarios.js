'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /post when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/post");
  });


  describe('posts', function() {

    beforeEach(function() {
      browser.get('index.html#!/post');
    });


    it('should render post when user navigates to /post', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('audio', function() {

    beforeEach(function() {
      browser.get('index.html#!/audio');
    });


    it('should render audio when user navigates to /audio', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});

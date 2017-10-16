angular.module('myApp.post-entry.component', [])
    .component('postEntry', {
        templateUrl: 'modules/post/posts-view/post-entry/post-entry.component.html',
        bindings: {
            post: '<',
            author: '<'
        },
        controller: function() {
            this.styles = {
                entry: {
                    marginBottom: '20px'
                },
                title: {
                    color: '#c8320f'
                },
                body: {
                    color: '#333333'
                }
            };
        }
    });
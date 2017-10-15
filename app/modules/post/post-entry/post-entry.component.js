angular.module('myApp.post-entry.component', [])
    .component('postEntry', {
        templateUrl: 'modules/post/post-entry/post-entry.component.html',
        bindings: {
            post: '<'
        },
        controller: function() {
            this.styles = {
                entry: {
                    marginBottom: '20px'
                },
                title: {
                    color: 'red'
                },
                body: {

                }
            };
        }
    });
angular.module('module1', [])
    .service('service', function () {
        this.echo = function (msg) {
            return "module1: " + msg;
        };
    });

angular.module('module2', [])
    .service('service', function () {
        this.echo = function (msg) {
            return "module2: " + msg;
        };
    });

(function (app, fib) {

    'use strict';

    app.factory('fibSvc', function () {
        return fib.generator;
    });

})(window.currentApp, window.fibgen);
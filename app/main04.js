(function (w) {
    'use strict';

    function init () {

        w.currentApp = angular.module('angularApp', ['ngAnimate', 'jlikness.watch', 'pasvaz.bindonce']);

        setTimeout(function () {
            angular.bootstrap(document.body, ['angularApp']);
        }, 0);
    }

    zone.fork(Zone.myZone).run(init);
})(window);


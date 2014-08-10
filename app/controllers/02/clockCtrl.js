(function (app) {

    'use strict';

    function Controller($window, $log) {
        $log.log('Clock controller created.');
        if ($window.clock) {
            this.clock = $window.clock.start();
        }
    }

    Controller.$inject = ['$window', '$log'];

    app.controller('clockCtrl', Controller);

})(window.currentApp);
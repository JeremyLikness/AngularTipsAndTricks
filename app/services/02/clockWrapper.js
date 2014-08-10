(function (app) {

    'use strict';

    app.run(['$rootScope', '$window', '$log', function ($rootScope, $window, $log) {

        if ($window.clock && $window.setInterval) {
            var setInterval = $window.setInterval;
            $window.setInterval = function angularSetInterval(fn, interval) {
                setInterval(function () {
                    $rootScope.$apply(fn);
                }, interval);
            };
            $window.clock.start();
            $window.setInterval = setInterval;
            $log.log('Wrapped clock component.');
        }

    }]);

})(window.currentApp);
(function (app) {

    'use strict';

    app.factory('piSvc', ['$window', function ($window) {
        if ($window.pi) {
            return $window.pi.get();
        }
    }]);

})(window.currentApp);
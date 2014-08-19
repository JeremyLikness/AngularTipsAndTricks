(function (app) {

    'use strict';

    app.config(['$provide', function ($provide) {
        $provide.decorator('colorSvc', ['$delegate', '$log', function ($delegate, $log) {
            var getColor = $delegate.getColor.bind($delegate);
            $log.log('Color service overridden.');
            $delegate.getColor = function () {
                $log.log('Color service called.');
                return getColor();
            };
            return $delegate;
        }]);
    }]);

})(window.currentApp);
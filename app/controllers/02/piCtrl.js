(function (app) {

    'use strict';

    function Controller($log, $scope, piSvc) {
        var _this = this;
        this.pi = NaN;
        $log.log('Pi controller created.');
        piSvc.bind = function (fn) {
            $scope.$apply(function bind () {
                    fn();
                    _this.pi = piSvc.pi;
                }
            );
        }
    }

    Controller.$inject = ['$log', '$scope', 'piSvc'];

    app.controller('piCtrl', Controller);

})(window.currentApp);
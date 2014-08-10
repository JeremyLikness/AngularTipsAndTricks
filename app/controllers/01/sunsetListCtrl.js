(function (app) {

    'use strict';

    function Controller(sunsetSvc, $log) {
        this.sunsetSvc = sunsetSvc;
        this.sunsetSvc.select(this.sunsetSvc.sunsets[0]);
        this.$log = $log;
        $log.log('List controller created.');
    }

    angular.extend(Controller.prototype, {
        select: function (sunset) {
            this.sunsetSvc.select(sunset);
        }
    });

    Controller.$inject = ['sunsetSvc', '$log'];

    app.controller('sunsetListCtrl', Controller);

})(window.currentApp);
(function (app) {

    'use strict';

    function Controller ($log, sunsetSvc) {
        this.$log = $log;
        this.sunsetSvc = sunsetSvc;
        this._filter = '';
        $log.log('Search controller created.');
    }

    Object.defineProperty(Controller.prototype, "filter", {
        enumerable: true,
        configurable: true,
        get: function () { return this._filter; },
        set: function (val) {
            this.sunsetSvc.filter = val;
            this._filter = val;
        }
    });

    Controller.$inject = ['$log', 'sunsetSvc'];

    app.controller('searchCtrl', Controller);

})(window.currentApp);
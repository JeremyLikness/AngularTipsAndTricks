(function (app) {

    'use strict';

    function Controller ($log, service, service1, service2) {
        this.$log = $log;
        this.service = service;
        this.service1 = service1;
        this.service2 = service2;
        this.text1 = this.text2 = this.text3 = '';
        this._text = '';
        $log.log('Echo controller created.');
    }

    Object.defineProperty(Controller.prototype, "text", {
        enumerable: true,
        configurable: true,
        get: function () { return this._text; },
        set: function (val) {
            this._text = val;
            this.text1 = this.service.echo(val);
            this.text2 = this.service1.echo(val);
            this.text3 = this.service2.echo(val);
        }
    });

    Controller.$inject = ['$log', 'service', 'service1', 'service2'];

    app.controller('echoCtrl', Controller);

})(window.currentApp);
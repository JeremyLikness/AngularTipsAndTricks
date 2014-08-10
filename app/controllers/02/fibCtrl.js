(function (app) {

    'use strict';

    function Controller(fibSvc, $log, $interval) {
        var _this = this, stop;
        this.fibSvc = fibSvc;
        this.$log = $log;
        this.sequences = [fibSvc.lastnum, fibSvc.curnum];
        this.cancel = function () {
            if (angular.isDefined(stop)) {
                $interval.cancel(stop);
                stop = undefined;
            }
        };
        stop = $interval(function () {
            _this.fibSvc.iterate();
            _this.sequences.push(fibSvc.curnum);
            if (_this.fibSvc.curnum > 99999999999) {
                _this.cancel();
            }
        }, 1000);
        $log.log('Fibonacci controller created.');
    }

    Controller.$inject = ['fibSvc', '$log', '$interval'];

    app.controller('fibCtrl', Controller);

})(window.currentApp);
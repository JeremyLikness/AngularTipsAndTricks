(function (app) {

    'use strict';

    function Controller($log, $interval, jlWatchService) {
        var _this = this;
        $log.log('Watch controller created.');
        this.watchCount = jlWatchService.countWatches();
        $interval(function () {
            _this.watchCount = jlWatchService.countWatches();
        }, 1000);
    }

    Controller.$inject = ['$log', '$interval', 'jlWatchService'];

    app.controller('watchCtrl', Controller);

})(window.currentApp);
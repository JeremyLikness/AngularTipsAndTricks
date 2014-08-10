(function (c) {

    'use strict';

    function leadingZero(val) {
        return val < 10 ? '0' + val : val;
    }

    function Clock () {
        var _this = this;
        this.time = new Date();
        this.displayTime = '';
        setInterval(function () {
            _this.time = new Date();
            _this.displayTime = _this.showTime();
        }, 1000);
    }

    Clock.prototype.showTime = function () {
        return this.time.getMonth() + '/' + this.time.getDate() + '/' + this.time.getFullYear() + ' '
            + this.time.getHours() + ':' + leadingZero(this.time.getMinutes()) + ':' +
            leadingZero(this.time.getSeconds());
    };

    c.start = function () {
        var clock = new Clock();
        c.start = function () {
            return clock;
        };
        return clock;
    };

})((window.clock = window.clock || {}));
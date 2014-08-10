(function (p) {

    'use strict';

    function Pi () {
        var _this = this;

        function iterate() {
            var x, y;
            if (_this.iterations === _this.maxCount) {
                return;
            }
            _this.iterations += 1;
            x = Math.random();
            y = Math.random();
            if (x * x + y * y <= 1.0) {
                _this.count += 1;
            }
            _this.pi = (4.0 * _this.count) / _this.maxCount;
        }

        this.maxCount = 3000;
        this.count = 0;
        this.iterations = 0;
        this.pi = 0;
        this.bind = function (fn) { fn(); };
        setInterval(function () {
            _this.bind(iterate);
        }, 0);
    }

    p.get = function () {
        var pi = new Pi();
        p.get = function () {
            return pi;
        };
        return pi;
    };

})((window.pi = window.pi || {}));
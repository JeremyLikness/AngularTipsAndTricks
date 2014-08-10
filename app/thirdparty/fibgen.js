(function (fib) {

    'use strict';

    function Generator () {
        this.lastnum = 1;
        this.curnum = 1;
    }

    Generator.prototype.iterate = function () {
        var newNumber = this.lastnum + this.curnum;
        this.lastnum = this.curnum;
        this.curnum = newNumber;
    };

    fib.generator = new Generator();

})((window.fibgen = window.fibgen || {}));
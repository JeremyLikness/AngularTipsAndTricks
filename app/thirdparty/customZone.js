(function (z) {

    var now = function () {
        return Date.now.bind(Date)();
    };

    z.myZone = {

        tasks: 0,
        queuedTasks: 0,
        lastReport: {},
        originalStart: undefined,
        lastReport: undefined,
        start: {},
        lastStack: '',
        diff: 0,
        totalDiff: 0,
        totalTime: 0,

        beforeTask: function () {
            this.tasks += 1;
            this.queuedTasks += 1;
            this.originalStart = this.originalStart || now();
            this.start = now();
        },

        enqueueTask: function () {
            try {
                throw new Error('instrumentation');
            }
            catch(e) {
                this.lastStack = e.stack;
            }
        },

        afterTask: function () {
            var current = now();
            this.queuedTasks -= 1;
            this.diff = current - this.start;
            this.totalDiff += this.diff;
            this.totalTime = current - this.originalStart;
            if (this.lastReport) {
                if (current - this.lastReport > 10000) {
                    this.lastReport = current;
                    console.log('Total: ' + this.tasks +
                    ' Average time per task: ' + this.totalDiff/this.tasks + 'ms' +
                    ' Total running time: ' + this.totalTime / 1000 + 's');
                    console.log(this.lastStack);
                }
            }
            else {
                this.lastReport = current;
            }
        }
    };

})(Zone);
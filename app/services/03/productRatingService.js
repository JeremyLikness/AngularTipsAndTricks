(function (app) {

    function Service () {
    }

    Object.defineProperty(Service.prototype, 'rating', {
        enumerable: true,
        configurable: true,
        get: function () { return this._rating; },
        set: function (val) {
            var idx;
            if (val != this._rating) {
                this._rating = val;
                for (idx = 0; idx < this._id; idx += 1) {
                    if (this._callbacks[idx]) {
                        this._callbacks[idx](val);
                    }
                }
            }
        }
    });

    angular.extend(Service.prototype, {
        _rating: 5,
        _id: 1,
        _callbacks: {},
        listen: function (fn) {
            var id = this._id;
            this._callbacks[id] = fn;
            this._id += 1;
            return id;
        },
        unListen: function (id) {
            if (this._callbacks[id]) {
                this._callbacks[id] = undefined;
            }
        }
    });


    app.service('productRatingSvc', Service);

})(window.currentApp);
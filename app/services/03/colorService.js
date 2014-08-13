(function (app) {

    function Service ($rootScope, $q, $log, $timeout) {
        this.$q = $q;
        this.$log = $log;
        this.$timeout = $timeout;
        this.$rootScope = $rootScope;
        $log.log('Color service created.');
    }

    angular.extend(Service.prototype, {
        colors: ['darkred', 'darkgreen', 'darkblue'],
        idx: 0,
        getColor: function () {
            this.$log.log('Color service invoked.');
            var defer = this.$q.defer(), _this = this,
                timeout = Math.floor(Math.random() * 500) + 500;
            this.$timeout(function () {
                _this.idx += 1;
                if (_this.idx == _this.colors.length) {
                    _this.idx = 0;
                }
                _this.$rootScope.color = _this.colors[_this.idx];
                defer.resolve(_this.$rootScope.color);
            }, timeout);
            return defer.promise;
        }
    });

    app.service('colorSvc', Service);

})(window.currentApp);
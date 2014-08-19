(function (app) {

    function Service ($rootScope, $log, $q, $timeout, colorList) {
        this.$q = $q;
        this.$timeout = $timeout;
        this.$rootScope = $rootScope;
        this.colors = colorList;
        $log.log('Color service created.');
    }

    app.value('colorList',
        ['darkred', 'darkgreen', 'darkblue']);

    angular.extend(Service.prototype, {
        idx: 0,
        getColor: function () {
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

    Service.$inject = ['$rootScope', '$log', '$q', '$timeout', 'colorList'];

    app.service('colorSvc', Service);

})(window.currentApp);
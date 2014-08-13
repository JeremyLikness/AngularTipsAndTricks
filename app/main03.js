(function (w, mod) {

    'use strict';

    w.currentApp = mod('angularApp', ['ngAnimate', 'ngRoute']);

    w.currentApp.run(['$rootScope', function ($rootScope) {
        $rootScope.color = 'white';
    }]);

    w.controllerFactory = function (name, service) {

        function Controller($log, svc) {
            this.$log = $log;
            this[service] = svc;
            $log.log(name + ' controller created.');
            this.load();
        }

        Controller.$inject = ['$log', service];

        angular.extend(Controller.prototype, {
            collection: [],
            load: function () {
                var _this = this;
                _this.collection = [];
                this[service].get().then(function (res) {
                    _this.collection = res;
                    _this.$log.log(name + ' loaded.');
                });
            }
        });

        return Controller;
    };

})(window, angular.module);
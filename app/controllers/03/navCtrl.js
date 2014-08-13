(function (app) {

    'use strict';

    function Controller($log, $location, productRatingSvc) {
        this.$location = $location;
        this.$log = $log;
        this.productRatingSvc = productRatingSvc;
        $log.log('Navigation controller created.');
    }

    angular.extend(Controller.prototype, {
        items: ['Categories', 'Products', 'Widgets'],
        navigate: function (item) {
            var path = '/' + item;
            this.$log.log('Navigation requested to: ' + path);
            this.$location.path(path);
        }
    });

    Controller.$inject = ['$log', '$location', 'productRatingSvc'];

    app.controller('navCtrl', Controller);

})(window.currentApp);
(function (app) {

    'use strict';

    app.value('menu',
        ['Categories', 'Products', 'Widgets']);

    function Controller($log, $location, productRatingSvc, menu) {
        this.$location = $location;
        this.$log = $log;
        this.productRatingSvc = productRatingSvc;
        this.items = menu;
        $log.log('Navigation controller created.');
    }

    angular.extend(Controller.prototype, {
        navigate: function (item) {
            var path = '/' + item;
            this.$log.log('Navigation requested to: ' + path);
            this.$location.path(path);
        }
    });

    Controller.$inject = ['$log', '$location', 'productRatingSvc', 'menu'];

    app.controller('navCtrl', Controller);

})(window.currentApp);
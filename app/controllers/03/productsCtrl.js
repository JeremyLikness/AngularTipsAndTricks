(function (w) {

    'use strict';

    var productsCtrl = w.controllerFactory('Products', 'productsSvc');

    function Controller ($log, svc, productRatingSvc) {
        var ctrl = new productsCtrl($log, svc);
        $log.log('Product controller override.');
        productRatingSvc.listen(function () {
            ctrl.load();
        });
        return ctrl;
    }

    Controller.$inject = productsCtrl.$inject.concat(['productRatingSvc']);

    w.currentApp.controller('productsCtrl', Controller);

})(window);
(function (app) {

    'use strict';

    function Service (sunsets, $log) {
        this.sunsets = sunsets;
        this.$log = $log;
        $log.log('Sunsets service created.');
    }

    angular.extend(Service.prototype, {
        select: function (sunset) {
            this.$log.log('Selected sunset ' + sunset.title);
            this.selected = sunset;
        },
        selected: {},
        filter: ''
    });

    Service.$inject = ['sunsets', '$log'];

    app.service('sunsetSvc', Service);

})(window.currentApp);
(function (app) {

    'use strict';

    app.factory('service1', function () {
        return angular.injector(['module1']).get('service');
    }).factory('service2', function () {
        return angular.injector(['module2']).get('service');
    });

})(window.currentApp);
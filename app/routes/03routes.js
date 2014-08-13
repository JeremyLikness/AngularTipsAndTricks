(function (app) {

    'use strict';

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/Products', {
                templateUrl: 'views/products.html',
                controller: 'productsCtrl',
                controllerAs: 'ctrl'
            })
            .when('/Categories', {
                templateUrl: 'views/categories.html',
                controller: 'categoriesCtrl',
                controllerAs: 'ctrl'
            })
            .when('/Widgets', {
                templateUrl: 'views/widgets.html',
                controller: 'widgetsCtrl',
                controllerAs: 'ctrl',
                resolve: {
                    color: ['colorSvc', function (colorSvc) {
                        return colorSvc.getColor();
                    }]
                }
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
})(window.currentApp);
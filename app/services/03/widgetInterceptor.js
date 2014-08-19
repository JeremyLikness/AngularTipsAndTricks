(function (app) {

    app.factory('widgetHttpInterceptor', ['$q', function ($q) {

        return {

            request: function (config) {

                var replace;

                if (config.url && config.url.indexOf('Widgets') >= 0) {
                    replace = config.url.replace('Widgets', 'Advertisements');
                    config.url = replace;
                }
                return config || $q.when(config);
            }
        };

    }]);

    app.config(['$httpProvider', function ($httpProvider) {

        $httpProvider.interceptors.push('widgetHttpInterceptor');

    }]);


})(window.currentApp);
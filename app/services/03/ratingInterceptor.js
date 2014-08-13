(function (app) {

    app.factory('ratingHttpInterceptor', ['$q', 'productRatingSvc', function ($q, productRatingSvc) {

        return {
            response: function (response) {
                var idx, cutOff, newList;
                if (response && response.data && response.data && response.data.value &&
                    response.data.value.length && response.data.value.length > 0 &&
                    response.data.value[0].Rating) {
                    cutOff = productRatingSvc.rating;
                    newList = [];
                    for (idx = 0; idx < response.data.value.length; idx += 1) {
                        if (response.data.value[idx].Rating >= cutOff) {
                            newList.push(response.data.value[idx]);
                        }
                    }
                    response.data.value = newList;
                }
                return response;
            }
        };

    }]);

    app.config(['$httpProvider', function ($httpProvider) {

        $httpProvider.interceptors.push('ratingHttpInterceptor');

    }]);


})(window.currentApp);
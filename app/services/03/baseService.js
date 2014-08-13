(function (w) {

    var baseService = {
        $http: {},
        $q: {},
        baseUrl: 'http://services.odata.org/V4/OData/OData.svc/',
        entity: '',
        get: function () {
            var defer = this.$q.defer();
            this.$http.get(this.baseUrl + this.entity)
                .success(function (response) {
                    defer.resolve(response.value);
                })
                .error(function (err) {
                    defer.reject(err);
                });
            return defer.promise;
        }
    };

    w.serviceFactory = function (entity) {

        function Service($http, $q) {
            this.$http = $http;
            this.$q = $q;
        }

        Service.$inject = ['$http', '$q'];

        angular.extend(Service.prototype, baseService, { entity: entity });

        return Service;
    };

})(window);
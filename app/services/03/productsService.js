(function (app, factory) {

    app.service('productsSvc', factory('Products'));

})(window.currentApp, window.serviceFactory);
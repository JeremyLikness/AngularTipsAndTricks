(function (app) {

    'use strict';

    app.constant('toc', [{
        name: 'Controller As Example',
        url: '01-controller-as.html'
    }, {
        name: 'Integration Example',
        url: '02-integration.html'
    }
    ]);

    function Controller (toc) {
        this.toc = toc;
    }

    Controller.$inject = ['toc'];

    app.controller('myCtrl', Controller);

})(angular.module('angularApp', ['ngAnimate']));
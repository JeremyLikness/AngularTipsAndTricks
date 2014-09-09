declare var angular: ng.IAngularStatic;

module Application {
    "use strict";

    export var angularApp: ng.IModule =
        angular.module("angularApp", ["ngAnimate"]);
}
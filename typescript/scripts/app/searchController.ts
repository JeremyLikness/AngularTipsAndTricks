module Application {

    "use strict";

    class SearchController {

        private _filter:string;

        constructor(public $log: ng.ILogService, public sunsetSvc: ISunsetService) {
            this._filter = "";
            $log.log("Search controller created.");
        }

        public get filter(): string {
            return this._filter;
        }

        public set filter(val: string) {
            this.sunsetSvc.filter = val;
            this._filter = val;
        }

    }

    angularApp.controller("searchCtrl", ["$log", "sunsetSvc", SearchController]);
} 
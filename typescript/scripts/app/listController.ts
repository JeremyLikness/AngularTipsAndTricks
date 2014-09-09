module Application {
    "use strict";
    class ListController {
        constructor(public sunsetSvc: ISunsetService, public $log: ng.ILogService) {
            sunsetSvc.select(sunsetSvc.sunsets[0]);
            $log.log("List controller created.");
        }

        public select(sunset: ISunsetData): void {
            this.sunsetSvc.select(sunset);
        }
    }

    angularApp.controller("sunsetListCtrl", ["sunsetSvc", "$log", ListController]);
} 
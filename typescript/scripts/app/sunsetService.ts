module Application {

    "use strict";

    export interface ISunsetService {
        sunsets: ISunsetData[];
        selected: ISunsetData;
        filter: string;
        select: (sunset: ISunsetData) => void;
    }

    class SunsetService implements ISunsetService {
        constructor(public sunsets: ISunsetData[], public $log: ng.ILogService) {
            $log.log("Sunsets service created.");
        }

        public selected: ISunsetData;

        public filter: string;

        public select(sunset: ISunsetData): void {
            this.$log.log("Selected sunset " + sunset.title);
            this.selected = sunset;
        }

    }

    angularApp.service("sunsetSvc", ["sunsets", "$log", SunsetService]);
} 
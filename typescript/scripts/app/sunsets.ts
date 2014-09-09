module Application {

    "use strict";

    export interface ISunsetData {
        image: string;
        location: string;
        title: string;
    }

    function initData(): void {
        var data: ISunsetData[] = [
            {
                image: "backyard.jpg",
                location: "Woodstock, GA",
                title: "Sunset in Woods"
            },
            {
                image: "beach1.jpg",
                location: "St. Petersburg, FL",
                title: "Sunset on Beach Sand"
            },
            {
                image: "beach2.jpg",
                location: "St. Petersburg, FL",
                title: "Orange Skies"
            },
            {
                image: "capecoral.jpg",
                location: "Cape Coral, FL",
                title: "City Sunset"
            },
            {
                image: "lake.jpg",
                location: "Woodstock, GA",
                title: "Sunset over Lake"
            },
            {
                image: "nuclear.jpg",
                location: "Cohutta Wilderness, GA",
                title: "Nuclear Sunset"
            }
        ];
        angularApp.value("sunsets", data);
    };

    initData();
}
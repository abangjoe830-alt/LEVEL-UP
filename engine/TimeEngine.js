/*==================================================
TIME ENGINE
LEVEL-UP V1.1
==================================================*/

class TimeEngine {

    static getNow(){

        const now = new Date();

        return {
            date: now.toISOString().split("T")[0],

            day: now.toLocaleDateString(
                "id-ID",
                { weekday: "long" }
            ),

            time: now.toLocaleTimeString(
                "id-ID",
                {
                    hour: "2-digit",
                    minute: "2-digit"
                }
            ),

            hour: now.getHours(),

            minute: now.getMinutes(),

            timestamp: now.getTime(),

            part: this.getDayPart(now.getHours())
        };

    }


    static getToday(){

        const now = new Date();

        const year =
            now.getFullYear();

        const month =
            String(now.getMonth() + 1)
            .padStart(2,"0");

        const day =
            String(now.getDate())
            .padStart(2,"0");

        return `${year}-${month}-${day}`;

    }


    static getDayPart(hour){

        if(hour >= 5 && hour < 12){

            return "PAGI";

        }

        if(hour >= 12 && hour < 17){

            return "SIANG";

        }

        if(hour >= 17 && hour < 21){

            return "SORE";

        }

        return "MALAM";

    }


    static getDayName(){

        return new Date().toLocaleDateString(
            "id-ID",
            {
                weekday:"long"
            }
        );

    }


    static getFormattedDate(){

        return new Date().toLocaleDateString(
            "id-ID",
            {
                weekday:"long",
                day:"numeric",
                month:"long",
                year:"numeric"
            }
        );

    }


    static isNewDay(lastDate){

        if(!lastDate){

            return true;

        }

        return lastDate !== this.getToday();

    }


    static getMinutesSinceMidnight(){

        const now = new Date();

        return (
            now.getHours() * 60
            + now.getMinutes()
        );

    }

}


/*==================================================
GLOBAL INSTANCE
==================================================*/

const timeEngine = TimeEngine;
class RankEngine{

    getRank(level){

        if(level>=100) return "IMMORTAL";

        if(level>=80) return "MYTHIC";

        if(level>=60) return "SSS";

        if(level>=45) return "SS";

        if(level>=35) return "S";

        if(level>=25) return "A";

        if(level>=18) return "B";

        if(level>=12) return "C";

        if(level>=7) return "D";

        if(level>=4) return "E";

        return "F";

    }

}

const rankEngine =
new RankEngine();
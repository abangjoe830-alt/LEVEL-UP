class GuardianEngine {

    constructor() {

        this.dailyQuest = [];
        this.mainQuest = null;
        this.dailyMessage = "";

    }

    startDay(){

    const today = this.getToday();

    if(this.lastReset !== today){

        this.generateDailyQuest();

        playerEngine.restoreEnergy(100);

        this.lastReset = today;

    }

}
    getMood(){

    const memory = guardianMemory.get();

    if(memory.loginStreak >= 7){

        return "PROUD";

    }

    if(memory.missDay >= 3){

        return "ANGRY";

    }

    if(memory.loginStreak >= 3){

        return "HAPPY";

    }

    return "NORMAL";

}

getGreeting(){

    const mood = this.getMood();

    return guardianPersonality.random(mood);

}

    generateDailyQuest() {

        this.dailyQuest =
            guardianQuestSelector.getTodayQuest();
            this.mainQuest =
this.dailyQuest[0];

        questEngine.setQuest(this.dailyQuest);

        this.dailyMessage=
guardianAdvisor.getAdvice();

    }

    getMainQuest(){

    return this.mainQuest;

}

    getDailyQuest() {

        return this.dailyQuest;

    }

 
getAdvice(){

    return guardianAdvisor.getAdvice();

}


getHabitMessage(){

    const memory = guardianMemory.get();

    switch(memory.favoriteTime){

        case "PAGI":

            return "Guardian mendeteksi Hunter lebih aktif pada pagi hari.";

        case "SIANG":

            return "Hunter biasanya memulai latihan pada siang hari.";

        case "MALAM":

            return "Guardian mengenali bahwa Hunter lebih produktif pada malam hari.";

        default:

            return "";

    }

}

getFavoriteCategory(){

    const data=
    guardianMemory.get().favoriteCategory;

    let max=0;

    let best=null;

    Object.keys(data).forEach(key=>{

        if(data[key]>max){

            max=data[key];

            best=key;

        }

    });

    return best;

}

getAdaptiveMessage(){

    const fav=this.getFavoriteCategory();

    switch(fav){

        case "SPORT":

            return "Guardian mendeteksi Hunter menyukai Quest olahraga.";

        case "STUDY":

            return "Guardian melihat Hunter berkembang melalui belajar.";

        case "WORK":

            return "Guardian mengenali dedikasi Hunter terhadap pekerjaan.";

        default:

            return "";

    }

}

getToday(){

    const d = new Date();

    return (
        d.getFullYear() + "-" +
        (d.getMonth() + 1) + "-" +
        d.getDate()
    );

}

getDailyMessage(){

    return this.dailyMessage;

}

}

const guardianEngine = new GuardianEngine();
class GuardianMemory {

    static KEY = "LEVEL_UP_GUARDIAN_MEMORY";

    constructor(){

        this.memory = this.load() || {

            totalQuestCompleted:0,

            totalQuestFailed:0,

            totalGoldEarned:0,

            totalExpEarned:0,

            currentStreak:0,

            longestStreak:0,

            favoriteQuest:{},

            history:[],

lastLogin:null,

loginStreak:0,

missDay:0,

favoriteCategory:{},

favoriteTime:null,

totalLogin:0
         
        };
        
    }

    save(){

        localStorage.setItem(

            GuardianMemory.KEY,

            JSON.stringify(this.memory)

        );

    }

    load(){

        const data = localStorage.getItem(

            GuardianMemory.KEY

        );

        return data ? JSON.parse(data) : null;

    }

    get(){

        return this.memory;

    }

    getFavoriteQuest(){

    let max=0;

    let favorite=null;

    for(const quest in this.memory.favoriteQuest){

        if(this.memory.favoriteQuest[quest]>max){

            max=this.memory.favoriteQuest[quest];

            favorite=quest;

        }

    }

    return favorite;

}

getQuestStatistic(title){

    let completed = 0;

    let failed = 0;

    this.memory.history.forEach(item=>{

        if(item.title===title){

            if(item.result==="SUCCESS"){

                completed++;

            }else{

                failed++;

            }

        }

    });

    return{

        completed,

        failed

    };

}

updateLogin(){

    const today=new Date().toDateString();

    if(this.memory.lastLogin===today){

        return;

    }

    if(this.memory.lastLogin){

        const yesterday=new Date();

        yesterday.setDate(yesterday.getDate()-1);

        if(this.memory.lastLogin===yesterday.toDateString()){

            this.memory.loginStreak++;

            this.memory.missDay=0;

        }else{

            this.memory.loginStreak=1;

            this.memory.missDay++;

        }

    }else{

        this.memory.loginStreak=1;

    }

    this.memory.lastLogin=today;

    this.memory.totalLogin++;

const hour = new Date().getHours();

if(hour >= 5 && hour < 12){

    this.memory.favoriteTime = "PAGI";

}else if(hour < 17){

    this.memory.favoriteTime = "SIANG";

}else{

    this.memory.favoriteTime = "MALAM";

}

    this.save();

}

recordQuest(category){

    if(!this.memory.favoriteCategory[category]){

        this.memory.favoriteCategory[category]=0;

    }

    this.memory.favoriteCategory[category]++;

    this.save();

}

}

const guardianMemory =
    new GuardianMemory();
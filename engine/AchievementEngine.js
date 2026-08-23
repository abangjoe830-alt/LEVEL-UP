class AchievementEngine {

    constructor(){
        this.lastUnlocked = null;

        this.achievement = [

            {
                id:1,
                title:"🥉 First Step",

                description:
                "Selesaikan Quest pertama.",

                target:1,

                rewardGold:100,

                rewardCrystal:1,

                completed:false,

                claimed:false
            },

            {
                id:2,
                title:"📚 Book Worm",

                description:
                "Selesaikan 10 Quest Belajar.",

                target:10,

                rewardGold:300,

                rewardCrystal:2,

                completed:false,

                claimed:false
            },

            {
                id:3,
                title:"🏃 Iron Body",

                description:
                "Selesaikan 10 Quest Olahraga.",

                target:10,

                rewardGold:300,

                rewardCrystal:2,

                completed:false,

                claimed:false
            },

            {
                id:4,
                title:"🔥 Consistency",

                description:
                "Login 7 Hari.",

                target:7,

                rewardGold:500,

                rewardCrystal:3,

                completed:false,

                claimed:false
            }

        ];

    }

    getAll(){

        return this.achievement;

    }

    checkAchievement(){

    const memory = guardianMemory.get();

    this.achievement.forEach(item=>{

        switch(item.id){

            case 1:

                if(memory.totalQuestCompleted>=1){

                    if(!item.completed){

    item.completed = true;

    this.lastUnlocked = item;

}

                }

            break;

            case 2:

                if(
memory.favoriteCategory.STUDY>=10
){

                    if(!item.completed){

    item.completed = true;

    this.lastUnlocked = item;

}

                }

            break;

            case 3:

                if(
memory.favoriteCategory.SPORT>=10
){

                    if(!item.completed){

    item.completed = true;

    this.lastUnlocked = item;

}

                }

            break;

            case 4:

                if(memory.loginStreak>=7){

                    if(!item.completed){

    item.completed = true;

    this.lastUnlocked = item;

}
                }

            break;

        }

    });

}

claim(id){

    const item=this.achievement.find(

        a=>a.id===id

    );

    if(!item) return false;

    if(!item.completed) return false;

    if(item.claimed) return false;

    playerEngine.addGold(item.rewardGold);

    playerEngine.addCrystal(item.rewardCrystal);

    item.claimed=true;

    return true;

}

getLastUnlocked(){

    return this.lastUnlocked;

}

}

const achievementEngine =
new AchievementEngine();
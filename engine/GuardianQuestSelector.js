class GuardianQuestSelector {

    constructor() {

        this.dailyQuestCount = 3;

    }

    getTodayQuest() {

        return this.selectQuest();

    }

    selectQuest() {

    const allQuest =
        guardianQuestPool.getAllQuest();

    const memory =
        guardianMemory.get();

    const favoriteQuest =
        guardianMemory.getFavoriteQuest();

    const favoriteCategory =
        guardianEngine.getFavoriteCategory();

    let scoredQuest = [...allQuest].map(quest => {

        let score = Math.random() * 10;

        // =========================
        // FAVORITE QUEST
        // =========================

        if(
            favoriteQuest &&
            quest.title === favoriteQuest
        ){

            score += 50;

        }

        // =========================
        // FAVORITE CATEGORY
        // =========================

        if(
            favoriteCategory &&
            quest.category === favoriteCategory
        ){

            score += 25;

        }

        // =========================
        // QUEST HISTORY
        // =========================

        const stat =
            guardianMemory.getQuestStatistic(
                quest.title
            );

        score += stat.completed * 3;

        // =========================
        // DIFFICULTY ADAPTATION
        // =========================

        quest =
            this.adjustDifficulty(quest);

        return {

            quest,
            score

        };

    });

    // Urutkan berdasarkan skor Guardian

    scoredQuest.sort(
        (a,b) => b.score - a.score
    );

    // =========================
    // VARIASI CATEGORY
    // =========================

    const selected = [];

    const usedCategory = [];

    // Prioritas: kategori berbeda

    for(
        const item of scoredQuest
    ){

        const category =
            item.quest.category;

        if(
            !usedCategory.includes(category)
        ){

            selected.push(item.quest);

            usedCategory.push(category);

        }

        if(
            selected.length >=
            this.dailyQuestCount
        ){

            break;

        }

    }

    // Kalau kategori tidak cukup,
    // isi slot yang masih kosong

    if(
        selected.length <
        this.dailyQuestCount
    ){

        for(
            const item of scoredQuest
        ){

            if(
                !selected.includes(item.quest)
            ){

                selected.push(item.quest);

            }

            if(
                selected.length >=
                this.dailyQuestCount
            ){

                break;

            }

        }

    }

    return selected.map(quest => {

        return {

            ...quest,

            progress:0,

            status:"AVAILABLE",

            completed:false,

            claimed:false

        };

    });

}

adjustDifficulty(quest){

    const stat =
        guardianMemory.getQuestStatistic(
            quest.title
        );

    if(stat.completed>=5){

        if(quest.difficulty==="Easy"){

            quest.difficulty="Normal";

        }

        else if(quest.difficulty==="Normal"){

            quest.difficulty="Hard";

        }

        else if(quest.difficulty==="Hard"){

            quest.difficulty="Elite";

        }

    }

    return quest;

}

}

const guardianQuestSelector =
    new GuardianQuestSelector();
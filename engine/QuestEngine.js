class QuestEngine {

    constructor() {
        this.activeQuest = [];
    }

    setQuest(quests) {
        this.activeQuest = quests;
    }

    getQuest() {
        return this.activeQuest;
    }

    startQuest(id) {

        const quest = this.activeQuest.find(
            q => q.id === id
        );

        if (!quest) return false;
        if (quest.status !== "AVAILABLE") return false;

        quest.status = "IN_PROGRESS";
        return true;
    }

    completeQuest(id) {

    const quest = this.activeQuest.find(
        q => q.id === id
    );

    if (!quest) return false;

    if (quest.status !== "IN_PROGRESS") {
        return false;
    }

    if (quest.progress < quest.target) {
        return false;
    }

    quest.progress = quest.target;

    quest.status = "COMPLETED";

    return true;
}

    addProgress(id, amount) {

        const quest = this.activeQuest.find(
            q => q.id === id
        );

        if (!quest) return false;

        if (quest.status !== "IN_PROGRESS") {
            return false;
        }

        amount = Number(amount);

        if (!Number.isFinite(amount) || amount <= 0) {
            return false;
        }

        quest.progress += amount;

        if (quest.progress >= quest.target) {

            quest.progress = quest.target;

            quest.status = "COMPLETED";

        }

        return true;

    }

    claimReward(id) {

        const quest = this.activeQuest.find(
            q => q.id === id
        );

        if (!quest) return false;
        if (quest.status !== "COMPLETED") return false;

        playerEngine.addExp(quest.exp);
        playerEngine.addGold(quest.gold);
        guardianMemory.recordQuest(
    quest.category
);
        guardianMemory.memory.totalQuestCompleted++;

guardianMemory.memory.totalGoldEarned +=
quest.gold;

guardianMemory.memory.totalExpEarned +=
quest.exp;

guardianMemory.save();

        if (quest.crystal) {
            playerEngine.addCrystal(quest.crystal);
        }
guardianMemory.memory.history.push({

    title:quest.title,

    difficulty:quest.difficulty,

    exp:quest.exp,

    gold:quest.gold,

    result:"SUCCESS",

    date:new Date().toLocaleDateString()

});

if(!guardianMemory.memory.favoriteQuest[quest.title]){

    guardianMemory.memory.favoriteQuest[quest.title]=0;

}

guardianMemory.memory.favoriteQuest[quest.title]++;

guardianMemory.save();

guardianMemory.save();

achievementEngine.checkAchievement();
        quest.status = "CLAIMED";

        return true;
    }

}

const questEngine = new QuestEngine();
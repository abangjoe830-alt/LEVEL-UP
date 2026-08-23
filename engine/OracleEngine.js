class OracleEngine {

    constructor() {

        this.online = true;

    }

    startDay() {

        const dailyQuest =
            guardianQuestSelector.selectQuest();

        questEngine.setQuest(dailyQuest);

        return {

            greeting:
    guardianEngine.getGreeting(),
    habit:

guardianEngine.getHabitMessage(),

            message:
                "Guardian telah menyiapkan Quest untuk hari ini.",

            quest:
                dailyQuest

        };

    }

}

const oracleEngine = new OracleEngine();
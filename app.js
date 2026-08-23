const player = playerEngine.getPlayer();

// Guardian mencatat login hari ini
guardianMemory.updateLogin();

console.log(JSON.stringify(guardianMemory.get(), null, 2));

oracleEngine.startDay();

guardianEngine.startDay();

document.getElementById("app").innerHTML =
    OracleScreen.render(player);

document
    .getElementById("oracleStart")
    .addEventListener("click", () => {

        oracleVoice.speak(
    oracleEngine.startDay().greeting
);

        router.register("dashboard", () => {

            return Dashboard.render(player);

        });

        router.register("status", () => {

            return HunterStatus.render();

        });

        router.register("quest", () => {

    return QuestPage.render();

});

router.register("inventory", () => {

    return InventoryPage.render();

});

router.register("achievement", () => {

    return AchievementPage.render();

});

router.register("settings", () => {

    return SettingsPage.render();

});

        router.go("dashboard");

    });

    function startQuest(index){

    const quest = questEngine.getQuest()[index];

    if(!quest) return;

    questEngine.startQuest(quest.id);

    router.go("dashboard");

}

function addQuestProgress(id, amount){

    const success =
        questEngine.addProgress(id, amount);

    if(!success){

        console.log(
            "Progress gagal ditambahkan."
        );

        return;

    }

    router.go("dashboard");

}
function startMainMission(id){

    const quest =
        guardianEngine.getMainQuest();

    if(!quest) return;

    if(quest.id !== id) return;

    questEngine.startQuest(quest.id);

    router.go("dashboard");

}

function completeMainMission(id){

    const quest =
        guardianEngine.getMainQuest();

    if(!quest) return;

    if(quest.id !== id) return;

    questEngine.completeQuest(quest.id);

    router.go("dashboard");

}

function claimMainMission(id){

    const quest =
        guardianEngine.getMainQuest();

    if(!quest) return;

    if(quest.id !== id) return;

    const success =
        questEngine.claimReward(quest.id);

    if(success){

        const unlocked =
            achievementEngine.getLastUnlocked();

        if(unlocked){

            alert(

`🏆 ACHIEVEMENT UNLOCKED

${unlocked.title}

+${unlocked.rewardGold || 0} Gold
+${unlocked.rewardCrystal || 0} Crystal`

            );

        }

    }

    router.go("dashboard");

}

function completeQuest(index){

    const quest = questEngine.getQuest()[index];

    if(!quest) return;

    questEngine.completeQuest(quest.id);

    router.go("dashboard");

}

function claimReward(index){

    const quest = questEngine.getQuest()[index];

    if(!quest) return;

    questEngine.claimReward(quest.id);

    const unlocked =
achievementEngine.getLastUnlocked();

if(unlocked){

    alert(

`🏆 ACHIEVEMENT UNLOCKED

${unlocked.title}

+${unlocked.rewardGold} Gold
+${unlocked.rewardCrystal} Crystal`

    );

}

    document
        .getElementById("rewardPopup")
        .classList
        .remove("hidden");

    document
        .getElementById("rewardContent")
        .innerHTML = `

        <p>⭐ +${quest.exp} EXP</p>

        <p>🪙 +${quest.gold} Gold</p>

        ${quest.crystal > 0
            ? `<p>💎 +${quest.crystal} Crystal</p>`
            : ""}

    `;

}

function closeRewardPopup(){

    document
        .getElementById("rewardPopup")
        .classList
        .add("hidden");

    router.go("dashboard");

}

function toggleGuardianVoice(){

    const player =
        playerEngine.getPlayer();

    if(!player.settings){

        player.settings = {
            voice: true
        };

    }

    player.settings.voice =
        player.settings.voice === false;

    SaveEngine.save(player);

    oracleVoice.enabled =
        player.settings.voice;

    router.go("settings");

}
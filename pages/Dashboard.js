class Dashboard {

    static render(player){

        return `

<div class="dashboard">

${PlayerCard.render(player)}



<div class="guardian-card ui-card">

    <h3>🤖 Guardian</h3>

    <h4>

        ${guardianEngine.getGreeting()}

    </h4>

    <p>

        ${guardianEngine.getDailyMessage()}

    </p>

</div>
${Dashboard.renderMainMission()}
<div class="dashboard-header">

    <h2>👋 Selamat Datang, Hunter</h2>

    <p>
        Selesaikan quest hari ini untuk mendapatkan EXP.
    </p>

</div>

<div class="status-grid">

${StatusCard.render("⚡","Energy",player.energy)}

${StatusCard.render("💰","Gold",player.gold || 0)}

</div>

${QuestCard.render(questEngine.getQuest())}

<div id="rewardPopup" class="reward-popup hidden">

    <div class="reward-popup-card">

        <h2>🎉 QUEST COMPLETED</h2>

        <div id="rewardContent"></div>

        <button
            class="btn-primary"
            onclick="closeRewardPopup()">

            Awesome!

        </button>

    </div>

</div>

${BottomNav.render()}

</div>

`;

    }

    static renderMainMission(){

    const quest =
        guardianEngine.getMainQuest();

    if(!quest){

        return "";

    }

    return `

    <div class="main-mission-card ui-card">

        <div class="main-mission-header">

            <span>⭐ MAIN MISSION</span>

            <span class="main-mission-difficulty">

                ${quest.difficulty}

            </span>

        </div>

        <div class="main-mission-title">

            ${quest.icon || "⚔️"}

            ${quest.title}

        </div>

        <div class="main-mission-description">

            ${quest.description || quest.story || ""}

        </div>

        <div class="main-mission-target">

            🎯 Target:

            <strong>

                ${quest.target}

                ${quest.unit || ""}

            </strong>

        </div>

        <div class="main-mission-reward">

            🎁 Reward:

            ⭐ ${quest.exp} EXP

            🪙 ${quest.gold} Gold

            ${quest.crystal ? `💎 ${quest.crystal} Crystal` : ""}

        </div>

        <div class="main-mission-progress">

            <div class="quest-progress-bar">

                <div
                    class="quest-progress-fill"
                    style="width:${
                        quest.target > 0
                        ? Math.min(
                            (quest.progress / quest.target) * 100,
                            100
                        )
                        : 0
                    }%">
                </div>

<div class="main-mission-action">

            ${Dashboard.renderMainMissionButton(quest)}

        </div>
            </div>

            <small>

                ${quest.progress || 0}

                /

                ${quest.target}

                ${quest.unit || ""}

            </small>

        </div>

    </div>

    `;

}

static renderMainMissionButton(quest){

    switch(quest.status){

        case "AVAILABLE":

            return `
                <button
                    class="btn-primary quest-btn"
                    onclick="startMainMission(${quest.id})">

                    ▶️ Start Mission

                </button>
            `;

        case "IN_PROGRESS":

            return `
                <button
                    class="btn-primary quest-btn"
                    onclick="completeMainMission(${quest.id})">

                    ✅ Complete Mission

                </button>
            `;

        case "COMPLETED":

            return `
                <button
                    class="btn-success quest-btn"
                    onclick="claimMainMission(${quest.id})">

                    🎁 Claim Reward

                </button>
            `;

        case "CLAIMED":

            return `
                <button
                    class="quest-btn"
                    disabled>

                    ✔ Mission Claimed

                </button>
            `;

        default:

            return "";

    }

}

}
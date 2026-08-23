class QuestCard {

    static render(quests = []) {

        let html = `
        <div class="ui-card quest-card">

           <div class="quest-header">

    <h3>📜 Daily Quest</h3>

    <button
        class="view-all-btn"
        onclick="router.go('quest')">

        View All →

    </button>

</div>
            <div class="quest-list">
        `;

        quests.slice(0,3).forEach((quest,index)=>{

    html += `
        <div class="quest-item difficulty-${quest.difficulty.toLowerCase()}">

            <div class="quest-info">

                <div class="quest-title">

    ${quest.icon} ${quest.title}

</div>

<div class="quest-description">

    ${quest.description}

</div>

<div class="quest-story">

    🤖 Guardian:

    ${quest.story || ""}

</div>

<div class="quest-difficulty">

    ${this.renderDifficulty(quest.difficulty)}

</div>

                <div class="quest-status">

    ${this.renderStatus(quest.status)}

</div>

<div class="quest-difficulty">

⚔ Difficulty :

${quest.difficulty}

</div>

                <div class="quest-reward">

    <div class="reward-box">

        ⭐

        <strong>${quest.exp}</strong>

        <small>EXP</small>

    </div>

    <div class="reward-box">

        🪙

        <strong>${quest.gold}</strong>

        <small>Gold</small>

    </div>

    ${quest.crystal > 0 ? `

    <div class="reward-box">

        💎

        <strong>${quest.crystal}</strong>

        <small>Crystal</small>

    </div>

    ` : ""}

</div>

<div class="quest-target">

🎯 Target :

${quest.target}

${quest.unit || ""}

</div>

<div class="quest-progress">

    <div class="quest-progress-bar">

        <div
            class="quest-progress-fill"
            style="width:${(quest.progress / quest.target) * 100}%">

        </div>

    </div>

    <small>

        ${quest.progress} / ${quest.target}

    </small>

</div>

            </div>

           ${this.renderButton(quest, index)}

        </div>
    `;

});

        html += `
            </div>

        </div>
        `;

        return html;

    }

    static renderButton(quest, index) {

        

    switch (quest.status) {

        case "LOCKED":
            return `
                <button class="quest-btn" disabled>
                    🔒 Locked
                </button>
            `;

        case "AVAILABLE":
            return `
                <button
                    class="btn-primary quest-btn"
                    onclick="startQuest(${index})">

                    ▶ Start

                </button>
            `;

        case "IN_PROGRESS":
    return `
        <div class="quest-progress-actions">

            ${this.renderProgressButtons(quest)}

        </div>
    `;

        case "COMPLETED":
            return `
                <button
                    class="btn-success quest-btn"
                    onclick="claimReward(${index})">

                    🎁 Claim

                </button>
            `;

        case "CLAIMED":
            return `
                <button
                    class="quest-btn"
                    disabled>

                    ✔ Claimed

                </button>
            `;

        default:
            return "";
    }

}

static renderProgressButtons(quest){

    let step = 1;
    let label = "";

    switch(quest.unit){

        case "ml":
            step = 250;
            label = "+250 ml";
            break;

        case "KM":
            step = 1;
            label = "+1 KM";
            break;

        case "menit":
            step = 15;
            label = "+15 menit";
            break;

        case "langkah":
            step = 500;
            label = "+500 langkah";
            break;

        case "lompatan":
            step = 50;
            label = "+50 lompatan";
            break;

        case "tugas":
            step = 1;
            label = "+1 tugas";
            break;

        case "porsi":
            step = 1;
            label = "+1 porsi";
            break;

        case "kali":
            step = 1;
            label = "+1";
            break;

        default:
            step = 1;
            label = "+1";
    }

    return `
        <button
            class="progress-add-btn"
            onclick="addQuestProgress(${quest.id}, ${step})">

            ${label}

        </button>
    `;

}

static renderStatus(status){

    switch(status){

        case "LOCKED":
            return "🔒 LOCKED";

        case "AVAILABLE":
            return "🟢 AVAILABLE";

        case "IN_PROGRESS":
            return "🟡 IN PROGRESS";

        case "COMPLETED":
            return "🔵 COMPLETED";

        case "CLAIMED":
            return "🟣 CLAIMED";

        default:
            return "";

    }

}

static renderDifficulty(level){

    switch(level){

        case "Easy":
            return "🟢 Easy";

        case "Normal":
            return "🔵 Normal";

        case "Hard":
            return "🟠 Hard";

        case "Elite":
            return "🔴 Elite";

        case "Legend":
            return "🟣 Legend";

        default:
            return "";

    }

}

}
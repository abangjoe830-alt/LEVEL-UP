class AchievementPage {

    static render() {

        return `

<div class="dashboard">

    <div class="ui-card quest-card">

        ${PlayerCard.render(playerEngine.getPlayer())}

        <h2 class="achievement-title">
🏆 Achievement
</h2>

        <div class="achievement-list">

    ${AchievementPage.renderAchievement()}

</div>

    </div>

    ${BottomNav.render()}

</div>

`;

    }

static renderAchievement(){

    let html="";

    achievementEngine.getAll().forEach(item=>{

        html += AchievementPage.renderCard(

            item.title,

            item.description,

            0,

            item.completed

        );

    });

    return html;

}
    static renderCard(title, desc, progress, unlocked) {

        return `

<div class="achievement-card ${unlocked ? "unlocked" : "locked"}">

    <h3>${title}</h3>

    <p>${desc}</p>

    <div class="progress-bar">

        <div
            class="progress-fill"
            style="width:${progress}%">
        </div>

    </div>

    <div class="progress-text">

        ${unlocked ? "✅ Unlocked" : progress + "%"}

    </div>

</div>

`;

    }

}
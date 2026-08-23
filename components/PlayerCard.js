class PlayerCard {

    static render(player){

        const expNow = player.exp || 0;
        const expMax = player.maxExp || 100;

        const percent = Math.round((expNow / expMax) * 100);

        return `

<div class="player-card ui-card">

    <div
    class="player-avatar"
    onclick="router.go('status')">

    <div class="avatar-ring"></div>

    <div class="avatar-crystal">

        <div class="crystal-top"></div>

        <div class="crystal-middle"></div>

        <div class="crystal-bottom"></div>

    </div>

</div>

    <h2 class="player-name">

    ${player.name}

</h2>

<div class="hunter-title">

${titleEngine.getTitle()}

</div>

    <p class="player-role">

    ${player.title}

</p>

    <div class="player-level">

Hunter Level ${player.level}

</div>

<div class="hunter-rank">

🏅 Rank

${rankEngine.getRank(player.level)}

</div>

    ${UIProgressBar.render(percent)}

    <div class="exp-text">

${expNow} / ${expMax} EXP

</div>

<div class="player-resource">

    <div>❤️ ${player.energy}</div>

    <div>🪙 ${player.gold}</div>

    <div>💎 ${player.crystal}</div>

</div>

</div>

`;

    }

}
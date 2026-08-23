class HunterStatus {

    static render() {

        const player = playerEngine.getPlayer();

        const rank = playerEngine.getRank();

const title = playerEngine.getTitle();

        const percent = Math.round(
    (player.exp / player.maxExp) * 100
);

        return `

        <div class="hunter-status">

    <button
        class="back-button"
        onclick="router.go('dashboard')">

        ← Dashboard

    </button>

            <div class="status-header">

                <div class="status-avatar">

                    <div class="avatar-ring avatar-ring-3"></div>

                    <div class="avatar-ring avatar-ring-2"></div>

                    <div class="avatar-ring"></div>

                    <div class="avatar-crystal">

                        <div class="crystal-top"></div>
                        <div class="crystal-middle"></div>
                        <div class="crystal-bottom"></div>

                    </div>

                </div>

                <h2>${player.name}</h2>

                <p>${player.role}</p>

                <span class="hunter-title">

    ${title}

</span>

            </div>

            <div class="status-section">

    <h3>Status</h3>

    <div class="status-row">

        <span>Level</span>

        <strong>${player.level}</strong>

    </div>

    ${UIProgressBar.render(percent)}

    <div class="exp-text">

        ${player.exp} / ${player.maxExp} EXP

    </div>

    <div class="status-row">

        <span>Rank</span>

       <strong>${rank}</strong>

    </div>

</div>

            <div class="status-section">

                <h3>Resources</h3>

                <div class="status-row">

                    <span>⚡ Energy</span>

                    <strong>${player.energy}</strong>

                </div>

                <div class="status-row">

                    <span>🪙 Gold</span>

                    <strong>${player.gold}</strong>

                </div>

                <div class="status-row">

                    <span>💎 Crystal</span>

                    <strong>${player.crystal}</strong>

                </div>

                <div class="status-row">

                    <span>🔥 Streak</span>

                    <strong>${player.streak} Hari</strong>

                </div>

            </div>

            <div class="status-section">

    <h3>Attributes</h3>

    <div class="status-row">

        <span>STR</span>

        <div class="attribute-action">

            <strong>${player.stats.str}</strong>

            <button
                class="attribute-btn"
                onclick="upgradeAttribute('str')">

                +

            </button>

        </div>

    </div>

    <div class="status-row">

        <span>AGI</span>

        <div class="attribute-action">

            <strong>${player.stats.agi}</strong>

            <button
                class="attribute-btn"
                onclick="upgradeAttribute('agi')">

                +

            </button>

        </div>

    </div>

    <div class="status-row">

        <span>VIT</span>

        <div class="attribute-action">

            <strong>${player.stats.vit}</strong>

            <button
                class="attribute-btn"
                onclick="upgradeAttribute('vit')">

                +

            </button>

        </div>

    </div>

    <div class="status-row">

        <span>INT</span>

        <div class="attribute-action">

            <strong>${player.stats.int}</strong>

            <button
                class="attribute-btn"
                onclick="upgradeAttribute('int')">

                +

            </button>

        </div>

    </div>

    <div class="status-row">

        <span>Available Points</span>

        <strong>${player.stats.freePoint}</strong>

    </div>

</div>

        `;

    }

}

function upgradeAttribute(stat){

    const success = playerEngine.upgradeStat(stat);

    if(success){

        router.go("status");

    }else{

        alert("Skill Point tidak cukup!");

    }

}
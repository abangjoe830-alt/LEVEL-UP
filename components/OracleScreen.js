class OracleScreen {

    static render(player, questCount = 3) {

        const messages = [

            "Hari baru. Kesempatan baru.",

            "Guardian telah menyiapkan misi untukmu.",

            "Jangan sia-siakan potensi hari ini.",

            "Kemajuan kecil hari ini akan menjadi kekuatan besar esok.",

            "Selamat datang kembali, Hunter."

        ];

        const message =
            messages[Math.floor(Math.random() * messages.length)];

        return `

<div class="oracle-screen">

    <div class="oracle-card">

       <div class="oracle-logo">

<div class="crystal">

<div class="crystal-top"></div>

<div class="crystal-middle"></div>

<div class="crystal-bottom"></div>

</div>

<div class="energy-ring"></div>


<div class="energy-ring energy-ring-2"></div>
</div>

        <h1 class="oracle-title">

ORACLE

</h1>

<p class="oracle-sub">

SYSTEM ACTIVATED

</p>

        
        <p class="oracle-player">

            Hunter ${player.name}

        </p>

        <p class="oracle-message">

            "${message}"

        </p>

        <div class="oracle-stats">

    <div class="ui-card">

        <span>⚡</span>

        <strong>${player.energy}</strong>

        <small>ENERGY</small>

    </div>

    <div class="ui-card">

        <span>🏆</span>

        <strong>${player.level}</strong>

        <small>LEVEL</small>

    </div>

    <div class="ui-card">

        <span>📜</span>

        <strong>${questCount}</strong>

        <small>QUEST</small>

    </div>

</div>

        ${UIButton.primary("LANJUTKAN MISI","oracleStart")}

        <div class="oracle-footer">

    BECOME BETTER EVERY DAY

</div>

    </div>

</div>

        `;

    }

}
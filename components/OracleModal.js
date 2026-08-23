class OracleModal {

    static render(player) {

        return `
        <div class="oracle-overlay">

            <div class="oracle-box">

                <h2>👁 ORACLE ONLINE</h2>

                <p class="oracle-title">
                    Selamat datang kembali,
                    <strong>${player.name}</strong>
                </p>

                <p>
                    Guardian telah menyelesaikan analisis hari ini.
                </p>

                <p>
                    ${questEngine.getQuest().length} Quest telah disiapkan.
                </p>

                <button id="oracleStartBtn">
                    MULAI HARI INI
                </button>

            </div>

        </div>
        `;

    }

}
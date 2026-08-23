class SettingsPage {

    static render(){

        const player =
            playerEngine.getPlayer();

        const voice =
            player.settings?.voice !== false;

        return `

<div class="dashboard">

    <div class="ui-card quest-card">

        <h2>⚙️ Settings</h2>

        <div class="status-section">

            <h3>🔊 Guardian Voice</h3>

            <div class="status-row">

                <span>Voice</span>

                <button
                    class="attribute-btn"
                    onclick="toggleGuardianVoice()">

                    ${voice ? "ON" : "OFF"}

                </button>

            </div>

        </div>


        <div class="status-section">

            <h3>🎨 Appearance</h3>

            <div class="status-row">

                <span>Theme</span>

                <strong>Dark</strong>

            </div>

        </div>


        <div class="status-section">

            <h3>💾 Data</h3>

            <button
                class="btn-primary quest-btn"
                onclick="resetGameData()">

                Reset Progress

            </button>

        </div>

    </div>

    ${BottomNav.render()}

</div>

`;

    }

}
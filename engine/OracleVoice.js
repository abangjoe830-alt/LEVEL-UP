class OracleVoice {

    constructor(){

        this.enabled = true;
        this.voice = null;

    }

    init(){

        const voices =
            speechSynthesis.getVoices();

        if(!voices.length) return;

        // Prioritaskan voice Indonesia
        const indonesianVoices =
            voices.filter(v =>
                v.lang &&
                v.lang.toLowerCase().startsWith("id")
            );

        // Pilih voice Indonesia pertama
        // jika tidak ada, gunakan voice browser pertama
        this.voice =
            indonesianVoices[0] || voices[0];

    }

    syncSettings(){

        const player =
            playerEngine.getPlayer();

        this.enabled =
            player.settings?.voice !== false;

    }

    speak(text){

        this.syncSettings();

        if(!this.enabled) return;

        if(!text) return;

        const msg =
            new SpeechSynthesisUtterance(text);

        if(this.voice){

            msg.voice = this.voice;

        }

        msg.lang = "id-ID";

        // Lebih tenang dan natural
        msg.rate = 0.92;

        // Sedikit lebih rendah agar terasa seperti Guardian
        msg.pitch = 0.90;

        msg.volume = 1;

        speechSynthesis.cancel();

        speechSynthesis.speak(msg);

    }

}

const oracleVoice =
    new OracleVoice();

oracleVoice.init();

speechSynthesis.onvoiceschanged = () => {

    oracleVoice.init();

};
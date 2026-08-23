class SaveEngine {

    static KEY = "LEVEL_UP_SAVE";

    static save(player) {

        localStorage.setItem(
            this.KEY,
            JSON.stringify(player)
        );

    }

    static load() {

        const data = localStorage.getItem(this.KEY);

        if (!data) {
            return null;
        }

        return JSON.parse(data);

    }

}
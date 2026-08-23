class PlayerEngine {

    constructor() {

        const save = SaveEngine.load();

        if (save) {

    this.player = {

        version: 1,

        rank: "E",
        title: "Novice Hunter",

        stats: {

            str: 5,
            agi: 5,
            vit: 5,
            int: 5

        },

        ...save

    };

    if (!this.player.inventory) {

    this.player.inventory = [];

}

if (!this.player.equipment) {

    this.player.equipment = {
        weapon: null,
        armor: null
    };

}

if (!this.player.settings) {

    this.player.settings = {
        voice: true
    };

}

SaveEngine.save(this.player);

SaveEngine.save(this.player);

    return;

}

        this.player = {

    version: 1,

    name: "MING",
    role: "Tank / Support",

    level: 1,
    exp: 401,
    maxExp: 500,

    rank: "E",
    title: "Novice Hunter",

    stats: {

    str: 5,
    agi: 5,
    vit: 5,
    int: 5,

    freePoint: 0

},

    gold: 6,
crystal: 0,

inventory: [],

equipment: {
    weapon: null,
    armor: null
},

settings: {
    voice: true
},

streak: 1,
energy: 100

};

    }

    getPlayer() {
        return this.player;
    }

    addGold(amount) {

        this.player.gold += amount;

        SaveEngine.save(this.player);

    }

    addItem(item) {

    if (!item) return false;

    this.player.inventory.push(item);

    SaveEngine.save(this.player);

    return true;

}

equipItem(itemId) {

    const item = this.player.inventory.find(
        item => item.id === itemId
    );

    if (!item) return false;

    if (item.type === "WEAPON") {

        this.player.equipment.weapon = item;

    }

    else if (item.type === "ARMOR") {

        this.player.equipment.armor = item;

    }

    else {

        return false;

    }

    SaveEngine.save(this.player);

    return true;

}

    addCrystal(amount) {

        this.player.crystal += amount;

        SaveEngine.save(this.player);

    }

    addExp(amount) {

        this.player.exp += amount;

        while (this.player.exp >= this.player.maxExp) {

            this.player.exp -= this.player.maxExp;
            this.player.level++;

this.player.stats.freePoint += 5;
            this.player.maxExp += 100;

        }

        SaveEngine.save(this.player);

    }

    useEnergy(amount) {

        this.player.energy = Math.max(
            0,
            this.player.energy - amount
        );

        SaveEngine.save(this.player);

    }

    restoreEnergy(amount) {

        this.player.energy = Math.min(
            100,
            this.player.energy + amount
        );

        SaveEngine.save(this.player);

    }

    getRank() {

    const level = this.player.level;

    if (level >= 100) return "SSS";
    if (level >= 75) return "SS";
    if (level >= 50) return "S";
    if (level >= 35) return "A";
    if (level >= 20) return "B";
    if (level >= 10) return "C";

    return "E";

}

getTitle() {

    const level = this.player.level;

    if (level >= 100) return "Legend Hunter";
    if (level >= 75) return "Mythic Hunter";
    if (level >= 50) return "Master Hunter";
    if (level >= 35) return "Elite Hunter";
    if (level >= 20) return "Shadow Walker";
    if (level >= 10) return "Junior Hunter";

    return "Novice Hunter";

}

upgradeStat(stat) {

    if (this.player.stats.freePoint <= 0) {
        return false;
    }

    if (!(stat in this.player.stats)) {
        return false;
    }

    if (stat === "freePoint") {
        return false;
    }

    this.player.stats[stat]++;

    this.player.stats.freePoint--;

    SaveEngine.save(this.player);

    return true;

}

}

const playerEngine = new PlayerEngine();
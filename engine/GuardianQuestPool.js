class GuardianQuestPool {

    constructor() {

        this.questPool = [

    // =========================
    // HEALTH
    // =========================

    {
        id: 1,
        icon: "💧",
        category: "HEALTH",
        title: "Hydration Challenge",
        description: "Minum air putih sebanyak 3 liter sepanjang hari.",
        story: "Guardian mendeteksi tubuh Hunter membutuhkan hidrasi yang cukup. Jangan biarkan stamina menurun hanya karena kekurangan air.",
        difficulty: "Easy",

        exp: 60,
        gold: 15,
        crystal: 0,

        target: 3000,
        unit: "ml",

        progress: 0,
        status: "AVAILABLE"
    },

    {
        id: 2,
        icon: "💧",
        category: "HEALTH",
        title: "Morning Hydration",
        description: "Minum 500 ml air putih setelah bangun tidur.",
        story: "Hari baru dimulai. Isi kembali energi tubuh Hunter sebelum menghadapi Quest hari ini.",
        difficulty: "Easy",

        exp: 40,
        gold: 10,
        crystal: 0,

        target: 500,
        unit: "ml",

        progress: 0,
        status: "AVAILABLE"
    },

    {
        id: 3,
        icon: "🥗",
        category: "HEALTH",
        title: "Clean Meal",
        description: "Konsumsi minimal 2 porsi makanan sehat hari ini.",
        story: "Guardian ingin Hunter menjaga tubuhnya sebagai fondasi kekuatan.",
        difficulty: "Normal",

        exp: 80,
        gold: 20,
        crystal: 0,

        target: 2,
        unit: "porsi",

        progress: 0,
        status: "AVAILABLE"
    },

    {
        id: 4,
        icon: "💤",
        category: "HEALTH",
        title: "Sleep Discipline",
        description: "Tidur sebelum pukul 22.30 malam ini.",
        story: "Hunter tidak akan berkembang tanpa pemulihan. Guardian memerintahkan istirahat tepat waktu.",
        difficulty: "Hard",

        exp: 180,
        gold: 40,
        crystal: 1,

        target: 1,
        unit: "kali",

        progress: 0,
        status: "AVAILABLE"
    },


    // =========================
    // SPORT
    // =========================

    {
        id: 5,
        icon: "🏃",
        category: "SPORT",
        title: "Morning Run",
        description: "Lari pagi sejauh 3 kilometer.",
        story: "Guardian mendeteksi stamina Hunter perlu ditingkatkan. Selesaikan lari pagi dan buktikan kemampuanmu.",
        difficulty: "Elite",

        exp: 300,
        gold: 50,
        crystal: 2,

        target: 3,
        unit: "KM",

        progress: 0,
        status: "AVAILABLE"
    },

    {
        id: 6,
        icon: "🪢",
        category: "SPORT",
        title: "Jump Rope Training",
        description: "Lakukan lompat tali sebanyak 500 kali.",
        story: "Kecepatan dan stamina dibangun melalui latihan yang konsisten.",
        difficulty: "Hard",

        exp: 180,
        gold: 35,
        crystal: 1,

        target: 500,
        unit: "lompatan",

        progress: 0,
        status: "AVAILABLE"
    },

    {
        id: 7,
        icon: "🏋️",
        category: "SPORT",
        title: "Strength Training",
        description: "Lakukan latihan kekuatan selama 30 menit.",
        story: "Guardian ingin melihat seberapa kuat tubuh Hunter menghadapi latihan hari ini.",
        difficulty: "Hard",

        exp: 220,
        gold: 40,
        crystal: 1,

        target: 30,
        unit: "menit",

        progress: 0,
        status: "AVAILABLE"
    },

    {
        id: 8,
        icon: "🚶",
        category: "SPORT",
        title: "Active Walking",
        description: "Berjalan kaki minimal 5.000 langkah hari ini.",
        story: "Tidak semua latihan harus berat. Konsistensi adalah senjata Hunter.",
        difficulty: "Normal",

        exp: 120,
        gold: 25,
        crystal: 0,

        target: 5000,
        unit: "langkah",

        progress: 0,
        status: "AVAILABLE"
    },


    // =========================
    // STUDY
    // =========================

    {
        id: 9,
        icon: "📚",
        category: "STUDY",
        title: "Aswaja Study",
        description: "Belajar materi Aswaja selama 30 menit.",
        story: "Guardian mengingatkan Hunter bahwa kekuatan tanpa ilmu tidak akan bertahan lama.",
        difficulty: "Normal",

        exp: 150,
        gold: 30,
        crystal: 0,

        target: 30,
        unit: "menit",

        progress: 0,
        status: "AVAILABLE"
    },

    {
        id: 10,
        icon: "📖",
        category: "STUDY",
        title: "Reading Mission",
        description: "Baca buku pilihanmu sebanyak 20 halaman.",
        story: "Guardian membuka misi pengetahuan. Pilih buku yang ingin kamu baca dan selesaikan target hari ini.",
        difficulty: "Hard",

        exp: 180,
        gold: 35,
        crystal: 1,

        target: 20,
        unit: "halaman",

        progress: 0,
        status: "AVAILABLE"
    },

    {
        id: 11,
        icon: "💻",
        category: "STUDY",
        title: "Coding Training",
        description: "Belajar atau praktik coding selama 45 menit.",
        story: "Guardian melihat potensi Hunter di dunia teknologi. Waktunya meningkatkan skill.",
        difficulty: "Hard",

        exp: 220,
        gold: 45,
        crystal: 1,

        target: 45,
        unit: "menit",

        progress: 0,
        status: "AVAILABLE"
    },

    {
        id: 12,
        icon: "📝",
        category: "STUDY",
        title: "Knowledge Review",
        description: "Review kembali materi yang sudah dipelajari selama 20 menit.",
        story: "Pengetahuan akan semakin kuat jika terus diulang.",
        difficulty: "Normal",

        exp: 100,
        gold: 20,
        crystal: 0,

        target: 20,
        unit: "menit",

        progress: 0,
        status: "AVAILABLE"
    },


    // =========================
    // WORK / PRODUCTIVITY
    // =========================

    {
        id: 13,
        icon: "💼",
        category: "WORK",
        title: "Productivity Mission",
        description: "Selesaikan 3 pekerjaan penting hari ini.",
        story: "Guardian menantang Hunter untuk menyelesaikan pekerjaan tanpa menunda.",
        difficulty: "Hard",

        exp: 200,
        gold: 40,
        crystal: 1,

        target: 3,
        unit: "tugas",

        progress: 0,
        status: "AVAILABLE"
    },

    {
        id: 14,
        icon: "🧹",
        category: "WORK",
        title: "Clean Zone",
        description: "Rapikan dan bersihkan area kerja selama 15 menit.",
        story: "Lingkungan yang rapi membantu pikiran Hunter tetap fokus.",
        difficulty: "Normal",

        exp: 100,
        gold: 20,
        crystal: 0,

        target: 15,
        unit: "menit",

        progress: 0,
        status: "AVAILABLE"
    },

    {
        id: 15,
        icon: "🎯",
        category: "WORK",
        title: "Deep Focus",
        description: "Fokus mengerjakan satu pekerjaan tanpa distraksi selama 45 menit.",
        story: "Guardian mengaktifkan Focus Mode. Tidak ada distraksi. Hanya Hunter dan targetnya.",
        difficulty: "Elite",

        exp: 280,
        gold: 55,
        crystal: 2,

        target: 45,
        unit: "menit",

        progress: 0,
        status: "AVAILABLE"
    }

];

    }

    getAllQuest() {

        return this.questPool;

    }

}

const guardianQuestPool = new GuardianQuestPool();
class GuardianPersonality {

    constructor(){

        this.dialog = {

            NORMAL:[
                "Guardian telah menyiapkan Quest hari ini.",

                "Selamat datang kembali, Hunter.",

                "Hari baru. Misi baru.",

                "Teruslah berkembang."
            ],

            HAPPY:[

                "Guardian senang melihat perkembanganmu.",

                "Konsistensimu mulai membuahkan hasil.",

                "Hunter semakin kuat setiap hari."

            ],

            PROUD:[

                "Luar biasa Hunter.",

                "Guardian bangga padamu.",

                "Perkembanganmu melebihi prediksi."

            ],

            ANGRY:[

                "Hunter... kamu menghilang cukup lama.",

                "Guardian tidak mendeteksi perkembangan.",

                "Bangkitlah."

            ]

        };

    }

    random(type){

        const data=this.dialog[type];

        return data[
            Math.floor(Math.random()*data.length)
        ];

    }

}

const guardianPersonality =
new GuardianPersonality();
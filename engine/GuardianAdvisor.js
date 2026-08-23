class GuardianAdvisor {

    getAdvice(){

        const memory = guardianMemory.get();

        if(memory.loginStreak >= 30){

            return "🔥 Hunter sangat konsisten. Guardian membuka tantangan Elite.";

        }

        if(memory.loginStreak >= 14){

            return "⭐ Hunter berkembang sangat cepat. Pertahankan ritmemu.";

        }

        if(memory.loginStreak >= 7){

            return "💪 Guardian bangga dengan konsistensimu.";

        }

        if(memory.missDay >= 5){

            return "⚠ Guardian mendeteksi Hunter terlalu lama berhenti.";

        }

        if(memory.missDay >= 3){

            return "😐 Ayo kembali berlatih. Potensimu jangan disia-siakan.";

        }

        return "✨ Hari ini adalah kesempatan menjadi lebih baik.";

    }

}

const guardianAdvisor =
new GuardianAdvisor();
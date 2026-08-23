class TitleEngine{

    getTitle(){

        const memory = guardianMemory.get();

        const fav =
            guardianEngine.getFavoriteCategory();

        if(memory.loginStreak>=30){

            return "👑 Guardian's Favorite";

        }

        if(fav==="STUDY"){

            return "📚 Book Worm";

        }

        if(fav==="SPORT"){

            return "🏃 Iron Runner";

        }

        if(fav==="WORK"){

            return "💼 Workaholic";

        }

        if(fav==="HEALTH"){

            return "❤️ Healthy Soul";

        }

        return "🌱 Rookie Hunter";

    }

}

const titleEngine =
new TitleEngine();
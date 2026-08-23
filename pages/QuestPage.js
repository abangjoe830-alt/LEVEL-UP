class QuestPage {

    static render(){

        return `

<div class="dashboard">

    <div class="ui-card quest-card">

        <h2>📜 Quest Center</h2>

        ${QuestCard.render(questEngine.getQuest())}

    </div>

    ${BottomNav.render()}

</div>

`;

    }

}
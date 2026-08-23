class UIProgressBar {

    static render(percent){

        return `

        <div class="progress">

            <div
                class="progress-fill"
                style="width:${percent}%">
            </div>

        </div>

        `;

    }

}
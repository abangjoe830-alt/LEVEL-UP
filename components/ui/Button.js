class UIButton {

    static primary(text, id = "") {

        return `
            <button
                class="btn-primary"
                id="${id}">
                ${text}
            </button>
        `;

    }

}
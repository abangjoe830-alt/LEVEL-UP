class StatusCard {

    static render(icon, title, value) {

        return `

<div class="status-card ui-card">

    <div class="status-icon">

        ${icon}

    </div>

    <div class="status-title">

        ${title}

    </div>

    <div class="status-value">

        ${value}

    </div>

</div>

`;

    }

}
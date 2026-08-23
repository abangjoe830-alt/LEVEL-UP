class InventoryPage {

    static render(){

        const player = playerEngine.getPlayer();

        const items = player.inventory || [];

        const equipment = player.equipment || {};

        const weapon = equipment.weapon;
        const armor = equipment.armor;

        return `

<div class="dashboard">

    <div class="ui-card quest-card">

        <h2>🎒 Inventory</h2>

        <div class="inventory-grid">

            <div class="inventory-item">
                <div class="label">❤️ Energy</div>
                <div class="value">${player.energy}</div>
            </div>

            <div class="inventory-item">
                <div class="label">⭐ EXP</div>
                <div class="value">${player.exp}</div>
            </div>

            <div class="inventory-item">
                <div class="label">🪙 Gold</div>
                <div class="value">${player.gold}</div>
            </div>

            <div class="inventory-item">
                <div class="label">💎 Crystal</div>
                <div class="value">${player.crystal}</div>
            </div>

        </div>


        <!-- EQUIPMENT -->

        <h3 class="inventory-section-title">
            ⚔️ Equipment
        </h3>

        <div class="inventory-grid">

            <div class="inventory-item">

                <div class="label">
                    ⚔️ Weapon
                </div>

                <div class="value">

                    ${
                        weapon
                        ? `${weapon.icon} ${weapon.name}`
                        : "Empty"
                    }

                </div>

                ${
                    weapon && weapon.effect && weapon.effect.str
                    ? `<small>+${weapon.effect.str} STR</small>`
                    : ""
                }

            </div>


            <div class="inventory-item">

                <div class="label">
                    🛡️ Armor
                </div>

                <div class="value">

                    ${
                        armor
                        ? `${armor.icon} ${armor.name}`
                        : "Empty"
                    }

                </div>

                ${
                    armor && armor.effect && armor.effect.vit
                    ? `<small>+${armor.effect.vit} VIT</small>`
                    : ""
                }

            </div>

        </div>


        <!-- ITEMS -->

        <h3 class="inventory-section-title">
            🎒 Items
        </h3>

        <div class="inventory-grid">

            ${
                items.length === 0

                ? `
                <div class="inventory-empty">
                    Inventory masih kosong.
                </div>
                `

                :

                items.map(item => `

                    <div class="inventory-item">

                        <div class="label">

                            ${item.icon || "📦"}

                            ${item.name}

                        </div>

                        <div class="value">

                            x${item.quantity || 1}

                        </div>

                    </div>

                `).join("")
            }

        </div>

    </div>

    ${BottomNav.render()}

</div>

`;

    }

}
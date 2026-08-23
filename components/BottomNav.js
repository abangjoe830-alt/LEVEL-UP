const BottomNav = {

    render(){

        return `

<div class="bottom-nav">

<button
data-page="dashboard"
onclick="router.go('dashboard')">
🏠
<span>Dashboard</span>
</button>

<button
data-page="quest"
onclick="router.go('quest')">
📜
<span>Quest</span>
</button>

<button
data-page="inventory"
onclick="router.go('inventory')">
🎒
<span>Inventory</span>
</button>

<button
data-page="achievement"
onclick="router.go('achievement')">
🏆
<span>Achievement</span>
</button>

<button
data-page="profile"
onclick="router.go('status')">
👤
<span>Profile</span>
</button>

<button
data-page="settings"
onclick="router.go('settings')">
⚙️
<span>Settings</span>
</button>

</div>

`;

    }

}
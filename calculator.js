document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.getElementById("buttons");
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            buttons.appendChild(cell);
        }
    }
});



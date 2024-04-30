document.addEventListener('DOMContentLoaded', function() {
    let number = 0;
    let countx = 7;
    let county = 4;
    let countz = 1;
    const buttons = document.getElementById("buttons");
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            buttons.appendChild(cell);
            if ((i == 0 && j == 0) || (i == 0 && j == 1) || (i == 0 && j == 2))
            { cell.textContent = countx++; }
            if ((i == 1 && j == 0) || (i == 1 && j == 1) || (i == 1 && j == 2))
            { cell.textContent = county++; }
            if ((i == 2 && j == 0) || (i == 2 && j == 1) || (i == 2 && j == 2))
            { cell.textContent = countz++; }
            if (i == 3 && j == 0) { cell.textContent = "0"; }
            if (i == 3 && j == 1) { cell.textContent = "."; }
            if (i == 3 && j == 2) { 
                cell.textContent = "="; 
                cell.style.backgroundColor = "#692A33"; 
            }
            if (i == 0 && j == 3) { 
                cell.textContent = "÷"; 
                cell.style.backgroundColor = "#4d84ab"; 
            }
            if (i == 1 && j == 3) { 
                cell.textContent = "×"; 
                cell.style.backgroundColor = "#4d84ab"; 
            }
            if (i == 2 && j == 3) {
                cell.textContent = "-"; 
                cell.style.backgroundColor = "#4d84ab"; 
            }
            if (i == 3 && j == 3) { 
                cell.textContent = "+"; 
                cell.style.backgroundColor = "#4d84ab"; 
            }
        }
    }
    const screen = document.getElementById("green-container");
    screen.textContent = number;
});


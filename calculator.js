document.addEventListener('DOMContentLoaded', function() {
    let countx = 7;
    let county = 4;
    let countz = 1;
    let cellValue = "";
    const buttons = document.getElementById("buttons");
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            buttons.appendChild(cell);
            if ((i == 0 && j == 0) || (i == 0 && j == 1) || (i == 0 && j == 2))
            { cell.textContent = countx++; cellValue = countx - 1; }
            if ((i == 1 && j == 0) || (i == 1 && j == 1) || (i == 1 && j == 2))
            { cell.textContent = county++; cellValue = county - 1; }
            if ((i == 2 && j == 0) || (i == 2 && j == 1) || (i == 2 && j == 2))
            { cell.textContent = countz++; cellValue = countz - 1; }
            if (i == 3 && j == 0) { cell.textContent = "0"; cellValue = "0"; }
            if (i == 3 && j == 1) { cell.textContent = "."; cellValue = "."; }
            if (i == 3 && j == 2) { 
                cell.textContent = "="; 
                cellValue = "=";
                cell.style.backgroundColor = "#692A33"; 
            }
            if (i == 0 && j == 3) { 
                cell.textContent = "÷";
                cellValue = " / ";
                cell.style.backgroundColor = "#4d84ab"; 
            }
            if (i == 1 && j == 3) { 
                cell.textContent = "×"; 
                cellValue = " * ";
                cell.style.backgroundColor = "#4d84ab"; 
            }
            if (i == 2 && j == 3) {
                cell.textContent = "-"; 
                cellValue = " - ";
                cell.style.backgroundColor = "#4d84ab"; 
            }
            if (i == 3 && j == 3) { 
                cell.textContent = "+"; 
                cellValue = " + ";
                cell.style.backgroundColor = "#4d84ab"; 
            }
            cell.setAttribute("data-value", cellValue);
        }
    }
    const cells = document.querySelectorAll('.cell');
    const screen = document.getElementById("green-container");
    screen.textContent = "";
    function calculate() {
        const expression = screen.textContent;
        const result = eval(expression);
        screen.style.animation = "disappear 0.5s forwards";
        screen.textContent = result;
        if (result.toString().length > 9) {
            screen.textContent = result.toExponential(2);
        }
    }
    cells.forEach(cell => {
        cell.addEventListener("click", function() {
            const cellValue = cell.getAttribute("data-value");
            if (cellValue === "=") { calculate(); }
            else { screen.textContent += cellValue; }
        });
    });
});

// slight pause before revealing answer (it goes blank for half a second)
// press space bar to backspace
// double press space bar to clear
// can also use numbers & symbols on keyboard to type equation & get answer
// when press 5 on keyboard, 5 button on screen presses down

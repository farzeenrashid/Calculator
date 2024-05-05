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
        screen.style.animation = "none"; 
        void screen.offsetWidth;
        screen.style.animation = "disappear 0.5s ease"; 
        const expression = screen.textContent;
        try {
            const result = eval(expression);
            screen.textContent = result.toString().length > 9 ? result.toExponential(2) : result;
        } catch (error) {
            screen.textContent = "Error";
        }
    }
    cells.forEach(cell => {
        cell.addEventListener("click", function() {
            const cellValue = cell.getAttribute("data-value");
            if (cellValue === "=") { 
                calculate();
            }
            else { screen.textContent += cellValue; }
        });
    });
    document.addEventListener('keydown', function(event) {
        if (event.shiftKey && event.code === 'Digit8') {
            screen.textContent += " * ";
        } 
        else if (event.code === 'Space') {
            screen.textContent = "";
        }
        else if (event.code === 'Backspace') {
            screen.textContent = screen.textContent.slice(0, -1);
        }
        else if (event.code === 'Digit1') {
            screen.textContent += "1";
        }
        else if (event.code === 'Digit2') {
            screen.textContent += "2";
        }
        else if (event.code === 'Digit3') {
            screen.textContent += "3";
        }
        else if (event.code === 'Digit4') {
            screen.textContent += "4";
        }
        else if (event.code === 'Digit5') {
            screen.textContent += "5";
        }
        else if (event.code === 'Digit6') {
            screen.textContent += "6";
        }
        else if (event.code === 'Digit7') {
            screen.textContent += "7";
        }
        else if (event.code === 'Digit8') {
            screen.textContent += "8";
        }
        else if (event.code === 'Digit9') {
            screen.textContent += "9";
        }
        else if (event.code === 'Digit0') {
            screen.textContent += "0";
        }
        else if (event.code === 'Equal' && event.shiftKey) {
            screen.textContent += " + ";
        }
        else if (event.code === 'Equal' || event.code === 'Enter') {
            calculate();
        }
        else if (event.code === 'Slash') {
            screen.textContent += " / ";
        }
        else if (event.code === 'Period') {
            screen.textContent += ".";
        }
        else if (event.code === 'Minus') {
            screen.textContent += " - ";
        }
        else if (event.code === 'KeyX') {
            screen.textContent += " * ";
        }       
    });
});
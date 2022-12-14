const mainContainer = document.createElement('div')
document.body.appendChild(mainContainer);

const grid = document.createElement('div')
gridbox.appendChild(grid);
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

//Grid creation logic
function makeRows(rowNum) {
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        grid.appendChild(row).className = "gridRow";
    };
};

function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };
    };
};

//Creates a default grid sized 16x16 
function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}

const resetButton = document.createElement('button');
resetButton.classList.add('resetButton');
resetButton.textContent = "Reset Grid";
mainContainer.appendChild(resetButton);

resetButton.addEventListener('click', function () {
    makeRows(0);
    makeColumns(0);
    defaultGrid();
});
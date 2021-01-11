let count = 9;
let columncount = 1;
let columns = "auto"
document.getElementById("divgrid").style.gridTemplateColumns = columns;

function addCell() {
    let newDiv = document.createElement("div");
    let temp = document.querySelector(".grid-container");
    temp.appendChild(newDiv);
    newDiv.onclick = function colorIt() {
        let color = document.getElementById("colorSelect").value;
        newDiv.style.backgroundColor = color;
    }
    newDiv.classList.add("grid-item");
    count++;
}

function addRow() {
    for (let i = 0; i < columncount; i++) {
        addCell();
    }
}

function addColumn() {
    columns = columns + " auto";
    document.getElementById("divgrid").style.gridTemplateColumns = columns;
    columncount++;
}

function deleteCell() {
    let temp = document.querySelector(".grid-container").lastElementChild;
    temp.remove()
}

function deleteRow() {
    for (let i = 0; i < columncount; i++) {
        deleteCell();
    }
}
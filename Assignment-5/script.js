let count = 9;
let columncount = 1;
let columns = "auto"
let hover = "false";
document.getElementById("divgrid").style.gridTemplateColumns = columns;

// LENGTH
let gridItemsCount = document.querySelectorAll('.grid-item').length;
console.log(gridItemsCount);

let cells = document.getElementsByClassName("grid-item");
let cellList = [...cells];

for (let i = 0; i < gridItemsCount; i++) {
    gridMovement(cellList[i]);
}

function addCell() {
    let newDiv = document.createElement("div");
    let temp = document.querySelector(".grid-container");
    temp.appendChild(newDiv);
    newDiv.onclick = function colorIt() {
        let color = document.getElementById("colorSelect").value;
        newDiv.style.backgroundColor = color;
    }
    newDiv.classList.add("grid-item");
    gridMovement(newDiv);
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

function deleteColumn() {
    if (columncount > 1) {
        columns = columns.substr(5);
        document.getElementById("divgrid").style.gridTemplateColumns = columns;
        columncount--;
    } else {
        alert("Can't remove anymore!");
    }
}

function colorIt(element) {
    let color = document.getElementById("colorSelect").value;
    element.style.backgroundColor = color;
}

function colorAll() {
    let gridItemsCount = document.querySelectorAll('.grid-item').length;
    let color = document.getElementById("colorSelect").value;
    let temp = document.querySelector(".grid-container").firstElementChild;
    temp.style.backgroundColor = color;
    for (let i = 0; i < gridItemsCount - 1; i++) {
        temp.nextElementSibling.style.backgroundColor = color;
        temp = temp.nextElementSibling;
    }
    // document.querySelectorAll(".grid-item").style.backgroundColor = color;

    // temp2 = document.querySelector(".grid-container").children;
    // temp2.style.backgroundColor = color;
}

function clearAll() {
    let gridItemsCount = document.querySelectorAll('.grid-item').length;
    let color = "white";
    let temp = document.querySelector(".grid-container").firstElementChild;
    temp.style.backgroundColor = color;
    for (let i = 0; i < gridItemsCount - 1; i++) {
        temp.nextElementSibling.style.backgroundColor = color;
        temp = temp.nextElementSibling;
    }
}

function gridMovement(cell) {
    let color = document.getElementById("colorSelect").value;

    cell.addEventListener("mousedown", element => {
        hover = true;
    });

    cell.addEventListener("mousemove", element => {
        if (hover) {
            cell.style.backgroundColor = color;
        }
    });
    cell.addEventListener("mouseup", element => {
        if (hover) {
            hover = false;
        }
    });
}

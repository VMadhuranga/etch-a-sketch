let body = document.querySelector("body");

let title = document.createElement("h1");
title.textContent = "Etch a Sketch";
body.appendChild(title);

let selectGridSize = document.createElement("button");
selectGridSize.innerText = "Select Square Size";
body.appendChild(selectGridSize);

// default grid size
let gridSize = 16;
createGrid(gridSize);

selectGridSize.addEventListener("click", userGridSize);

function createGrid(numberOfSquare) {
    let divContainer = document.createElement("div");
    divContainer.classList.add("container");

    for (let i = 0; i < numberOfSquare; i++) {
        // create divs inside div container
        let divSketch = document.createElement("div");
        divSketch.classList.add("sketch");

        for (let j = 0; j < numberOfSquare; j++) {
            // create divs inside div sketch
            let divEtch = document.createElement("div");
            divEtch.classList.add("etch")
            divSketch.appendChild(divEtch);

            // change color
            divEtch.addEventListener("mouseenter", () => {
                divEtch.setAttribute("style", "background:black;");
            });
        }
        divContainer.appendChild(divSketch);
    }
    body.appendChild(divContainer);
}

function userGridSize() {
    gridSize = Number(prompt("Select your square size between 2 and 64"));
    
    if (gridSize >= 2 && gridSize <= 64) {
        document.querySelector(".container").remove();
        createGrid(gridSize);
    } else {
        alert("Please select square size between 2 and 64");
    }
}
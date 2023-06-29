let body = document.querySelector("body");

let title = document.createElement("h1");
title.textContent = "Etch a Sketch";
body.appendChild(title);

let divContainer = document.createElement("div");
divContainer.classList.add("container");
createGrid(16);
body.appendChild(divContainer);

// change color
let divEtch = document.querySelectorAll(".etch");
divEtch.forEach((div) => {
    div.addEventListener("mouseenter", () => {
        div.setAttribute("style", "background:black;");
    });
});

function createGrid(numberOfSquare) {
    for (let i = 0; i < numberOfSquare; i++) {
        // create divs inside div container
        let divSketch = document.createElement("div");
        divSketch.classList.add("sketch");

        for (let j = 0; j < n; j++) {
            // create divs inside div sketch
            let divEtch = document.createElement("div");
            divEtch.classList.add("etch")

            divSketch.appendChild(divEtch);
        }
        divContainer.appendChild(divSketch);
    }
}
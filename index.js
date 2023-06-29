let body = document.querySelector("body");

let title = document.createElement("h1");
title.textContent = "Etch a Sketch";

let divContainer = document.createElement("div");
divContainer.classList.add("container");

body.appendChild(title);
createGrid(16);
body.appendChild(divContainer);

function createGrid(n) {
    for (let i = 0; i < n; i++) {
        let divSketch = document.createElement("div");
        divSketch.classList.add("sketch");

        for (let j = 0; j < n; j++) {
            let divEtch = document.createElement("div");
            divEtch.classList.add("etch")

            divSketch.appendChild(divEtch);
        }
        divContainer.appendChild(divSketch);
    }
}


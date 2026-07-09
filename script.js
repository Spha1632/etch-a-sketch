function generateGrid(size) {
    const divContainer = document.querySelector(".container");
    divContainer.innerHTML = "";

    for (let i = 0; i < size; i++) {
        const column = document.createElement("div");
        column.classList.add("gridColumn")
        divContainer.append(column)

        for (let j = 0; j < size; j++) {
            const gridBox = document.createElement("div");
            gridBox.classList.add("gridBox")
            column.append(gridBox)
            gridBox.style.height = `${500 / size}px`
            gridBox.style.width = `${500 / size}px`
        }
    }
}

function handleHover() {
    const gridBoxes = document.querySelectorAll(".gridBox");
    const gridColor = document.querySelector(".gridColor");

    gridBoxes.forEach((gridBox) => {
        gridBox.addEventListener("mouseover", () => {
            gridBox.style["background-color"] = gridColor.value;

        })
    })

}

function handleButtonClick() {
    const button = document.querySelector(".gridSize");

    button.addEventListener("click", () => {
        let gridSize;
        do {
            gridSize = parseInt(prompt("Enter Grid size"));
        } while (gridSize < 8 || gridSize > 100)
        
        generateGrid(gridSize)
        handleHover();
    })
}

generateGrid(16);
handleHover();
handleButtonClick();




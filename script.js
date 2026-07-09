const divContainer = document.querySelector(".container");

function generateGrid(size) {
    for (let i = 0; i < size; i++) {
        const column = document.createElement("div");
        column.classList.add("gridColumn")
        divContainer.append(column)

        for (let j = 0; j < size; j++) {
            const gridBox = document.createElement("div");
            gridBox.classList.add("gridBox")
            column.append(gridBox)
            gridBox.style.height = `${500/size}px`
            gridBox.style.width = `${500/size}px`
        }
    }
}

function handleHover() {
    const gridBoxes = document.querySelectorAll(".gridBox");

    gridBoxes.forEach((gridBox) => {
        
        gridBox.addEventListener("mouseover", () => {
            gridBox.style["background-color"] = "red";
        })
    })
    
}


generateGrid(16);
handleHover();




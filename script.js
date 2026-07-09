const divContainer = document.querySelector(".container");

function generateGrid(size) {
    for (let i = 0; i < size; i++) {
        const column = document.createElement("div");
        divContainer.append(column)

        for (let j = 0; j < size; j++) {
            const gridBox = document.createElement("div");
            gridBox.classList.add("gridBox")
            column.append(gridBox)
        }
    }
}

generateGrid(16);




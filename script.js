const gridSize = Number(prompt("Enter number between 2 and 100"));

if (gridSize < 2 || gridSize > 100) {
    location.reload();
}

const container = document.querySelector("#container");
const color = document.querySelector("#color");

for (let i = 0; i < gridSize; i++) {
    const flexContainer = document.createElement("div");
    flexContainer.classList.add("flexContainer");
    container.append(flexContainer);

    for (let j = 0; j < gridSize; j++) {
        const flexItem = document.createElement("div");
        flexItem.classList.add("flexItem");
        flexContainer.append(flexItem);
        flexItem.style.height = `${600 / gridSize}px`;   
        flexItem.style.width = `${600 / gridSize}px`;   
    }
    
}

const flexSquare = document.querySelectorAll(".flexItem");
const flexArray = Array.from(flexSquare);

flexArray.forEach(item => {
    item.addEventListener("mouseover", function() {
        item.style.backgroundColor = color.value;
    });
});
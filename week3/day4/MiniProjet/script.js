// Select a color and Draw what you want


let selectColor = "";
let cleanButton = document.querySelector("button");// clear button
cleanButton.addEventListener("click", () => {// all div grid
    let gridDiv = document.querySelectorAll("#grid div");
    gridDiv.forEach(element => (element.style.backgroundColor = null) );
})

// get div color for each elements
let coloredDiv = document.querySelectorAll("#colorSidebar div");
coloredDiv.forEach(element => {
    element.addEventListener("click", () => {
        selectColor = element.style.backgroundColor;
    })
})

// Add event listener for all grid
let clickygrid = false;
let gridDiv = document.querySelectorAll("#grid div");
gridDiv.forEach(element => {
    element.addEventListener("click", () => {
        element.style.backgroundColor = selectColor;
    })
    
    element.addEventListener("mousedown", () => {
        clickygrid = true;
        element.style.backgroundColor = selectColor;
    })

    element.addEventListener("mouseup", () => {
        clickygrid = false;
    })

    element.addEventListener("mouseover", () => {
        clickygrid ? (element.style.backgroundColor = selectColor) : "";
    })

})





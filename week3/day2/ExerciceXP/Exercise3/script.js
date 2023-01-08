// Declare a global variable named
let allBoldItems = [];

// Create a function called getBold_items()
function getBold_items() {
    let collectAllBold = document.querySelectorAll("strong");
    collectAllBold.forEach(element => allBoldItems.push(el))
}

// Create a function called highlight()
function highlight() {
    let collectAllBold = document.querySelectorAll("strong");
    collectAllBold.forEach(element => element.classList.add("bold-text-blue"));
    
}

// Create a function called return_normal()
function return_normal() {
    let collectAllBold= document.querySelectorAll("strong");
    collectAllBold.forEach(element => element.classList.remove("bold-text-black"));
    
}

// Call the function highlight() on mouseover and return_normal() on mouseout
document.getElementById("paragraphe").addEventListener("mouseover", highlight);
document.getElementById("paragraphe").addEventListener("mouseout", return_normal);

function highlight() {
document.getElementById("paragraphe").style.color = "blue";

}
function return_normal() {
document.getElementById("paragraphe").style.color = "black";
}



// In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation
let valueDiv = document.getElementById("navBar");
valueDiv.setAttribute("id", "socialNetworkNavigation");

// First, create a new <li> to the <ul>
let addLi = document.createElement("li");
//Create a new text node with “Logout” as its specified text.
let textNode = document.createTextNode("Logout");

// Append the text node to the newly created list
addLi.appendChild(textNode);

//  append this updated list node to the unordered list <ul>
let appendUl = document.querySelector("ul");
appendUl.appendChild(addLi);

let selectorUl = document.querySelector("ul");
// Show the text link firstElementChil
console.log(selectorUl.firstElementChild.textContent)

// Show the text link lastElementChild 
console.log(selectorUl.lastElementChild.textContent)
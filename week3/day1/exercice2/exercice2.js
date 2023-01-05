// Add a “light blue” background color and some padding to the <div>
let divBackgroundColor = document.querySelector("div:first-child");
divBackgroundColor.classList.add("backLightBlue");
divBackgroundColor.style.padding  = "15px 15px";

// Do not display the <li> that contains the text node “John”.
let liContainJhon = document.body.querySelector("ul li:nth-child(1)");
liContainJhon.style.display = "none";

// Add a border to the <li> that contains the text node “Pete”.
let borderLiPete = document.body.querySelector("ul li:nth-child(2)");
borderLiPete = "2px solid blue";

// Change the font size of the whole body.
document.body.style.fontSize = "20px";

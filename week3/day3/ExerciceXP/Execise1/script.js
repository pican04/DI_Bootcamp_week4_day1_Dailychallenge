
          //Part I


//call a function after 2 seconds.
//The function will alert “Hello World”.

function callAlert() {
    alert("Hello World"); // show alert
}
setTimeout(callAlert, 2000);// call a function after 2 seconds

         //Part II


/*using setTimeout, call a function after 2 seconds.
The function will add a new paragraph <p>Hello World</p> to the <div id="container">*/

// add new paragraph
function newParagraph() {
    let container = document.getElementById("container");
    let addParagraph = document.createElement("p");
    addParagraph.textContent = "Hello World";
    container.append(addParagraph);
}


         //Part III

//using setInterval, call a function every 2 seconds.
//The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// when the user will click on the button.Instead of clicking on the button, the interval will be cleared (ie. clearInterval) 

let callAfterSecond = setInterval(newParagraph, 2000);// call a function after 2 seconds

let userClick = document.getElementById("clear");
userClick.onclick = () => { // The interval will be cleared by user click
    clearInterval(callAfterSecond);
}
setInterval(() => {
    let paragraphListing = document.querySelectorAll("p");
    if (paragraphListing.length == 5) {
        clearInterval(callAfterSecond);
    }
}, 1000);






/*use setInterval to move the <div id="animate"> 
to the right side of the <div id="container">, when the button is clicked on.*/

function myMove() {
    let element = document.getElementById("animate");
    var position = 0;
    let id = setInterval(function () {
        if (position == 350) {
            clearInterval(id);
        }
        else {
            position++;
            element.style.left = position + "px";
        }
    }, 4);
}
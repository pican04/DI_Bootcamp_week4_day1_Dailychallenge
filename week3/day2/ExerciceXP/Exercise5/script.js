// Add many events listeners to one element
let element = document.getElementById("content");

// Use the click, mouseover, mouseout and dblclick events

element.addEventListener("mouseover", myFunction);
element.addEventListener("click", mySecondFunction);
element.addEventListener("mouseout", myThirdFunction);
element.addEventListener("dblclick", myFourthFunction);
function myFunction() {
    this.classList.toggle('makeColored')
}

function mySecondFunction() {
    document.getElementById("content").innerHTML = "hello world!<br>";
}

function myThirdFunction() {
    document.getElementById("content").innerHTML = "Moused out!<br>";
}

  function myFourthFunction() {
    document.getElementById("content").style.background = "black";
  }
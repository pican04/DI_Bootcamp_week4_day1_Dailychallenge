// retrieve the h1 and console.log it with DOM
let retrieveH1 = document.getElementsByTagName("h1")[0];
console.log(retrieveH1);

// remove the last paragraph in the <article> tag with DOM
let article = document.querySelector("article");
let articleLastPara = article.querySelector("p:last-of-type");
articleLastPara.remove();

// Add a event listener which will change the background color of the h2 to red,
// when it’s clicked on
let BackgrdColorH2 = document.getElementsByTagName("h2")[0];
// when it’s clicked on
BackgrdColorH2.addEventListener("click", () => {
    BackgrdColorH2.style.background = "red";
});

// Add an event listener which will hide the h3 when it’s clicked on
let listenerH3 = document.getElementsByTagName("h3")[0];
listenerH3.addEventListener("click", () => {
    listenerH3.style.display = "none";
});

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold
function changeFont() {
    let boldText = document.querySelectorAll("p");
    boldText.forEach(element => {
        element.classList.add("boldParagraph");
    })
}
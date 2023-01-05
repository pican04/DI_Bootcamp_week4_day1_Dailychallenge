
//Retrieve the div and console.log it
console.log(document.body.firstElementChild);

//Change the name “Pete” to “Richard”.
let selectList = document.body.getElementsByClassName("list")[0];
selectList.children[1].innerHTML = "Richard";

//Change each first name of the two <ul>'s to your name.
let changeFirstUl = document.body.querySelectorAll("ul li:nth-child(1)");
changeFirstUl.forEach(el => el.innerHTML = "Nadia Gueu");

//Delete the <li> that contains the text node “Sarah”.
let deleteContainSarah = document.body.getElementsByClassName("list")[1]; 
deleteContainSarah.children[1].remove();

// Add a class called student_list to both of the <ul>
let classAdd = document.body.querySelectorAll("ul");
classAdd.forEach(el => el.classList.add("student_list"));

// Add the classes university and attendance to the first <ul>.
classAdd.forEach( (el, index) => {
    if (index == 0) {
        el.classList.add("university", "attendance");
    }
});
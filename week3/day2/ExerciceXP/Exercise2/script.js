// Retrieve the form and console.log it.
let form = document.forms[0];

// Retrieve the inputs by their id and console.log them.
let retrieveFname = form.elements[0];
let retrieveLname = form.elements[1];
console.log(retrieveFname, retrieveLname);

// Retrieve the inputs by their name attribute and console.log them.
let retrieveInputFname = form.elements.fname;
let retrieveInputLname = form.elements.lname;
console.log(retrieveInputFname, retrieveInputLname);

// When the user submits the form
form.addEventListener("submit", (user) => {
    // use preventDefault() to stop the page from loading
    user.preventDefault();

    // get the values of the input tags
    let valueFname = retrieveInputFname.value;
    let valueLname = retrieveInputLname.value;

    // make sure that they are not empty
    if (valueFname != "" && valueLname != "") {

        // add first li
        let selectUl = document.querySelector(".usersAnswer"); //select ul
        let createLi1 = document.createElement("li");
        createLi1.textContent = valueFname;
        selectUl.appendChild(createLi1);

        // add second li
        let createLi2 = document.createElement("li");
        createLi2.textContent = valueLname;
        selectUl.appendChild(createLi2);
    }
})
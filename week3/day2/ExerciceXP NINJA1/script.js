//EXERCICE 2
 /**
  * We will create a form that ask the user for their email.
  * Then, using a function we will check the validity of the user’s input.
  */

//Add an input that has a type="email" to your form.
let form = document.createElement("form");
let inputForm = document.createElement("input");
inputForm.type = "text";
inputForm.placeholder = "Enter an email address";
let bouton = document.createElement("button");
bouton.innerHTML = "Submit";

form.appendChild(inputForm);
form.appendChild(bouton);
document.body.appendChild(form);


/*Write your own javascript validation function to check if the entered value is a valid email address.
 The address should contain some valid characters, and the @ sign, more characters then a .
 (period) and some more characters.*/

function emailChecking() { 
  let regMail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let verifEmail = regMail.test(inputForm.value);
  console.log(inputForm.value)
  if (verifEmail) {
    alert("You have entered a valid email address !");
  } else {
    alert("You have entered an invalid email address !");
  }
}

//On “submit”, the validation function should run and validate the email address.

bouton.addEventListener("click", emailChecking);

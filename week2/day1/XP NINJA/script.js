/*Exercise 1 : Evaluation */


5 >= 1;
// Prediction : True, car 5 est supérieur à 1

0 === 1; 
// Prediction : False, car 0 est inférieur à 1

4 <= 1; 
// Prediction : False, car 4 n'est pas inferieur à 1

1 != 1;
//Prediction : false, car 1 n'est pas different de 1
 
"A" > "B";
// Prediction : true, car l'emplacement en memoire de A est supérieur à pour B
 
"B" < "C";
// Prediction : true, car l'emplacement en memoire de C est supérieur à pour B
 
"a" > "A";
// Prediction : true, car l'emplacement en memoire de a est supérieur à pour A
 
"b" < "A"
// Prediction : false, car l'emplacement en memoire de b est supérieur à pour A
 
true === false; 
// Prediction : false, car true est l'inverse de false

true != true;
// Prediction : false


/*Exercise 2 : Ask For Numbers*/

let enterNumber = prompt("Enter your numbers separated by a comma");

let commasVerif =  enterNumber.split(",");

let newNumber = (a, b) => parseInt(a) + parseInt(b);
console.log(`The sum of your different numbers is ${commasVerif.reduce(newNumber)}`);


/*Exercise 3 : Find Nemo*/

//Ask the user to give you a sentence containing the word “Nemo”
let enterSentence = prompt("Enter a sentence containing the word Nemo");
//Find the word “Nemo”
let find = enterSentence.search("Nemo");
//Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".
console.log(`I found Nemo at ${find}`);



/*Exercise 4 : Boom*/

/* Prompt the user for a number. 
Depending on the users number you will return a string of the word “Boom”.  */
let numAnswer = prompt("Please enter a number:");
let output = "boom"
//If the number given is less than 2 : return “boom”
if (numAnswer < 2) {
  console.log("boom");
  //If the number given is evenly divisible by 2, add a exclamation mark to the end.
} else if (numAnswer % 2 === 0) {
  console.log("boom!".toLowerCase());
}
//If the number given is evenly divisible by 5, return the string in ALL CAPS.
else if (numAnswer % 5 === 0) {
  console.log("BOOM");
}
/* If the number given is evenly divisible by both 2 and 5,
 return the string in ALL CAPS and add an exclamation mark to the end. */
else if (numAnswer % 2 === 0 && numAnswer % 5 === 0) {
  console.log("BOOM!".toUpperCase());
}  
/* If the number given is bigger than 2 :
 the string should include n number of “o”s (n being the number given) */
if(numAnswer> 2){
  console.log("B" + "o".repeat(numAnswer) + "m");
}
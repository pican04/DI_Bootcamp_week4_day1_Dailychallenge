/*Exercise 1 : Divisible By Three
Instructions
Loop through the array above and determine whether or not each number is divisible by three.
Each time you loop console.log true or false. */

let numbers = [123, 8409, 100053, 333333333, 7];

for (let value of numbers) {
  if (value % 3 == 0) {
    console.log(value + " is divisible by three");
  } else {
    console.log(value + " is not divisible by three");
  }
}

//Exercise 2 : Attendance
//Given the object above where the key is the student’s name and the value is the country they are from.

let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina",
};
//Prompt the student for their name.
let nameAnswer = prompt("Please enter your name");
//If the name is in the object, console.log the name of the student and the country they come from.
if (nameAnswer in guestList) {
    console.log("Hi ! I'm " + nameAnswer + " is in " + guestList[nameAnswer]);
//If the name is not in the object, console.log: "Hi! I'm a guest.
  }else {
    console.log("Hi ! I'm a guest.")
}

 //Exercise 3 : Playing With Numbers


let age = [20,5,12,43,98,55];

let sumOfAge = 0;
let olderAge= 0;

for (let i = 0; i < age.length; i++) {
    sumOfAge += age[i];
    if (age[i] > olderAge) {
      olderAge = age[i];
    }
}
//Console.log the sum of all the numbers in the age array.
console.log("the add of All years is " + sumOfAge);
//Console.log the highest age in the array.
console.log("the Old years of All years is " + olderAge);
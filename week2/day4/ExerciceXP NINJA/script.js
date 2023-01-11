
//Exercise 1: Random Number

const RandomNumber = () => {//Get a random number between 1 and 100.
  let randomNumber = Math.floor(Math.random() * 100);
  let allEvenNumber = [];
  let j = 0;
  for (let i = 0; i < randomNumber; i++) {
    if (i % 2 == 0) {
      allEvenNumber[j] = i;
      j++;
    }
  }
  //Console.log all even numbers from 0 to the random number.
  console.log(allEvenNumber);
}
RandomNumber();

/*Exercise 2: Capitalized Letters
Instructions
Create a function that takes a string as an argument.
Have the function return:
The string but all letters in even indexes should be capitalized.
The string but all letters in odd indexes should be capitalized.
Note:
Index 0 will be considered even.
The argument of the function should be a lowercase string with no spaces. */

const capitalize = (word) => {
  let allWord = word.split("");
  let evenWord = [];
  let oddWord = [];
  for (let i = 0; i < allWord.length; i++) {
    if (i % 2 == 0 || i == 0) {
      evenWord[i] = allWord[i].toUpperCase();
    } else {
      evenWord[i] = allWord[i].toLowerCase();
    }
    if (i % 2 == 0 || i == 0) {
      oddWord[i] = allWord[i].toLowerCase();
    } else {
      oddWord[i] = allWord[i].toUpperCase();
    }
  }
  allWord = [oddWord.join(""), evenWord.join("")];
  return allWord;
}
console.log(capitalize("hello"));

/*Exercise 3 : Is Palindrome?
Instructions
Write a JavaScript function that checks whether a string is a palindrome or not.
Note A palindrome is a word, phrase or sequence that is spelled the same both backwards and forward, e.g., madam, bob or kayak.*/

const isPalindrome = (word) => {
  let checksWord = word.split("").reverse().join("");
  if (word == checksWord) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("madam"));

/*Exercise 4 : Biggest Number
Instructions
Create a function called biggestNumberInArray(arrayNumber) that takes an array as a parameter and returns the biggest number.
Note : This function should work with any array; */

const biggestNumberInArray = (arrayNumber) => {
  let bigNumber = 0;
  for (let i = 0; i < arrayNumber.length; i++) {
    if (isNaN(arrayNumber[i])) {
      continue;
    }
    if (arrayNumber[i] > bigNumber) {
      bigNumber = arrayNumber[i];
    }
  }
  return bigNumber;
}
console.log(biggestNumberInArray(["a", 3, "n", 4, 2, "c", 10]));

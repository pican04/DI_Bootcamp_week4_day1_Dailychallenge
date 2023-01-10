//Exercice 1 : Favorite Color 
  

  let sentence = ["my","favorite","color","is","blue"];
  let newSentence = sentence.join();
  
  console.log(newSentence);


  
  //Exercise 2 : Mixup

  // Create 2 variables. The values should be strings. For example:
  let variable1 = "good";
  let variable2 = "";
  
  // Slice out and swap the first 2 characters of the two strings from part 1.
  console.log(variable1.slice(0,2));
  console.log(variable2.slice(0,2));
  
  // Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).
  let variable3 = variable1.concat(variable2)
  
  // Finally console.log the new concatenated string.
  console.log(variable3);


  
  //Exercise 3 : Calculator
   
  /*Prompt the user for the first number.
  Store the first number in a variable called num1.*/
  let num1 = prompt("Enter your first number");
  console.log(typeof(num1));
  /* Prompt the user for the second number.
  Store the second number in a variable called num2. */
  let num2 = prompt("Enter your second number");
  //Create an Alert where the value is the SUM of num1 and num2.
  sum = parseInt(num1) + parseInt(num2);
  alert(sum);
  
  //BONUS

  //Make a program that can subtract, multiply, and also divide!
  
  //soustraction 
  soustraction = parseInt(num1) - parseInt(num2);
  alert(sub);
  // multiplication
  multiplication = parseInt(num1) * parseInt(num2);
  alert(multi);
  // division
  division = parseInt(num1) / parseInt(num2);
  alert(div);
  
/*Exercise 1 : Checking The BMI

Create two objects, each object should hold a person’s details. Here are the details:
FullName
Mass
Height
Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person
Outside of the objects, create a JS function that compares the BMI of both objects.
Display the name of the person who has the largest BMI.
 */

let person1 = {
  fullName: "Monnet Esther",
  mass: 65,
  height: 1.5,
  IMC: function () {
    let imc1 = person1.mass / (person1.height * person1.height);
    return imc1;
  },
};

let person2 = {
  fullName: "Sande Moussa",
  mass: 76,
  height: 1.9,
  IMC: function () {
    let imc2 = person2.mass / (person2.height * person2.height);
    return imc2;
  },
};

function compareIMC(imc1, imc2) {
  if (imc1.IMC < imc2.IMC) {
    return imc2.fullName + " has a big IMC";
  } else {
    return imc1.fullName + " has a big IMC";
  }
}

console.log(compareIMC(person1, person2));

/*Exercise 2 : Grade Average

Create a function called findAvg(gradesList) that takes an argument called gradesList.
Your function must calculate and console.log the average.
If the average is above 65 let the user know they passed
If the average is below 65 let the user know they failed and must repeat the course.
 */

function findAvg(gradesList) {
  if (gradesList.length === 0) {
    return 0;
  }
  let sumOfGrade = 0;
  for (let i = 0; i < gradesList.length; i++) {
    sumOfGrade += gradesList[i];
  }
  let average = sumOfGrade / gradesList.length;
  if (average < 65) {
    return "your result : " + average + " is failed and must repeat the course.";
  } else {
    return "Congratulation ! your result : " + average + " is passed.";
  }
}


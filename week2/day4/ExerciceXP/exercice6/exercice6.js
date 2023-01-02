//EXERCICE XP 6


/*Define a function called hotelCost().
It should ask the user for the number of nights they would like to stay in the hotel.
If the user doesn’t answer or if the answer is not a number, ask again.
The hotel costs $140 per night. The function should return the total price of the hotel.*/

function hotelCost(){
    
  const costs = 140;
  let nightsnumber = undefined;

  do {
    nightsnumber = prompt(' enter a number of nights please : ');
  } while (isNaN(nightsnumber));

  return console.log(`\n The hotel cost : ${Number(nightsnumber) * costs}$ \n`);
}



/*Define a function called planeRideCost().
It should ask the user for their destination.
If the user doesn’t answer or if the answer is not a string, ask again.
The function should return a different price depending on the location.
“London”: 183$
“Paris” : 220$
All other destination : 300$ */


function planeRideCost(){

  let country= {"London": 183, "Paris":220}
  let countryofdestination = undefined;
  let check= true;

  do {
    countryofdestination = prompt('enter your distination please : ');
      let characterline = countryofdestination;

      if(characterline.length > 0 && isNaN(characterline)){
          check = false;
      }
  } while (check);

  if (country[countryofdestination]) {
      return console.log(`\n the hotel cost: ${country[countryofdestination]}$ \n`);
  } else {
      return console.log(`\n The plane tickets cost : ${countryofdestination} \n`);
  }

}

/*Define a function called rentalCarCost().
It should ask the user for the number of days they would like to rent the car.
If the user doesn’t answer or if the answer is not a number, ask again.
Calculate the cost to rent the car. The car costs $40 everyday.
If the user rents a car for more than 10 days, they get a 5% discount.
The function should return the total price of the car rental.*/

function rentalCarCost(){

  const costs = 40;
  let Daysnumber = undefined;
  let output = 0;

  do {
      Daysnumber = prompt('Enter the day number : ');
  } while (isNaN(Daysnumber));

  output = Daysnumber * costs;
  if (Daysnumber > 10) {
    output -= output * 0.05;
  }

  return console.log(`\n The car cost : ${output}$ \n`);
}

//Define a function called totalVacationCost() that returns the total cost of the user’s 
//vacation by calling the 3 functions that you created above.

function totalVacationCost(){
  hotelCost();
  planeRideCost();
  rentalCarCost();
}
//Call the function totalVacationCost()
totalVacationCost()
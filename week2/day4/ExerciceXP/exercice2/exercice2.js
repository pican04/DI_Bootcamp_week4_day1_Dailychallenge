//Create a function named calculateTip() that takes no parameter.
//Inside the function, use prompt to ask John for the amount of the bill.
function calculateTip(){
let amountofthebill = Number(prompt("enter the amount of the bill"));

//EXERCICE XP 2

//If the bill is less than $50, tip 20%.
let Tipercent

if (amountofthebill<50) {
    Tipercent = 0.2
    }
 //If the bill is between $50 and $200, tip 15%. 
else if (amountofthebill>50 && amountofthebill<200) {
Tipercent = 0.15
}
//If the bill is more than $200, tip 10%.
else if (amountofthebill>200) {
    Tipercent = 0.1
    }

//Console.log the tip amount and the final bill (bill + tip).
let tip = amountofthebill * (1 + Tipercent)
console.log("bill:",amountofthebill);
console.log("Tip:", tip)
}
//Call the calculateTip() function
calculateTip()







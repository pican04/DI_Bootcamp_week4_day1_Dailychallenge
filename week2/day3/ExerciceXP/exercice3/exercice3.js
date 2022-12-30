// Exercise 3 : Repeat The Question
let check = true;

while(check){
 answer = prompt("enter a number");
type = typeof(answer);
console.log(type);

number = Number(answer);

if (!isNaN(number) && number>10){
    break
}
}




//EXERCICE XP 3

//Create a function call isDivisible() that takes no parameter.
function isDivisible(){
//In the function, loop through numbers 0 to 500.
let numbers =0
for(let i=0; i<500; i++){
//Console.log all the numbers divisible by 23.
//At the end, console.log the sum of all numbers that are divisible by 23.
if(i % 23 ===0){
    console.log(i)

sum = numbers + i
}

}
console.log("the sum of all numbers that are divisible by 23:", sum)
}
isDivisible()






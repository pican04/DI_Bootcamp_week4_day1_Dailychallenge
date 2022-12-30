//Partie I-Review About Arrays

let people = ["Greg", "Mary", "Devon", "James"];
//replace “James” to “Jason”
people.shift() 
people[people.length -1] ="jason" 
//add my name to the end of the people array
people.push("Nadia") 
//console.logs Mary’s index
console.log(people.indexOf("Mary")) 
//make a copy of the people array using the slice method
let copypeople = people.slice(1)
console.log(`copypeople:`, copypeople)
//gives the index of “Foo”
console.log(people.indexOf("Foo"))
//Create a variable called last which value is the last element of the array
let last = people [people.length -1]
console.log(`last:`, last)
console.log(people)


//Partie II - Loops
// iterate through the people array and console.log each person with loop
people.forEach(person =>  console.log("this person is:", person))
console.log(people)
//iterate through the people array and exit the loop after you console.log “Jason” with loop
for (let person of people ){
console.log("this person is:", person)
if(person === "jason"){break}
}




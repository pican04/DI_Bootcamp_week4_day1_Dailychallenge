// Exercise 2 : Your Favorite Colors

//Create an array called colors where the value is a list of my five favorite colors
let colors = ["yellow", "purple", "green", "orange", "blue"];
//Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for(let i=0; i<colors.length ; i++){
    console.log(`My #${i+1} choice is ${colors[i]}`)
}
//Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
let suffixes = ["st", "nd", "rd", "th", "th"];
for(let i=0; i<colors.length ; i++){
    console.log(`My #${i+1}${suffixes[i]} choice is ${colors[i]}`)
}
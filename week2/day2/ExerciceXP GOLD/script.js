// Exercise 1 : The World Translator
 //Use Switch Case

//Ask the user which language they speak.
let language = prompt("What language do you speak ?");
//Convert the user’s answer to lowercase, so that all the user’s inputs will be accepted in the if statement. For example “english” or “English” or “ENGlish” ect…”
language = language.toLowerCase();

switch (language) {
    //If the user speaks French : display “Bonjour”
  case "french":
    console.log("Bonjour")
    break;
    //If the user speaks English : display “Hello”
  case "english":
    console.log("Hello")
    break;
    //If the user speaks Hebrew : display “Shalom”
    case "hebrew":
    console.log("Shalom")
    break;
    //If the user doesn’t speak any of these 3 languages: display ‘01110011 01101111 01110010 01110010 01111001’
    default:
        console.log("01110011 01101111 01110010 01110010 01111001")
}

//Exercise 2 : The Grade Assigner

//Ask the user for their grade.
let gradeAnswer = parseInt(prompt("What is your grade ?"));
//If the grade is bigger than 90, console.log “A”
if (gradeAnswer > 90) {
    console.log("A")
//If the grade is between 80 and 90 (included), console.log “B”
}else if(gradeAnswer > 80 && gradeAnswer <= 90 ){
    console.log("B")
//If the grade is between 70(included) and 80 (included), console.log “C”
}else if(gradeAnswer >= 70 && gradeAnswer<= 80){
    console.log("C")
//If the grade is lower than 70, console.log “D”
}else{
    console.log("D")
}

//Exercise 3 : Verbing

//Prompt the user for a string. It must be a verb.
let verbAnswer = prompt("What is your verb?");

verbAnswer = verbAnswer.toLowerCase();
//If the length of the string is at least 3 and the string doesn’t end with “ing”, add ‘ing’ to the end of the string.
if (verbAnswer.length >= 3 && verbAnswer.endsWith("ing") == false) {
    console.log(`${verbAnswer}ing`)
//If the length of the string is at least 3 and the string ends with “ing” add “ly” to it’s end.
}else if (verbAnswer.length >= 3 && verbAnswer.endsWith("ing") == true ){
    console.log(`${verbAnswer}ly`)
//If the length of the string is less than 3, leave it unchanged.
}else{
    console.log(`${verbAnswer}`)
}
const sentence= "The movie is not that bad, I like it"
const wordNot = sentence.indexOf("not")
const wordBad = sentence.indexOf("bad")
if (wordNot !== -1 && wordBad !== -1 && wordNot< wordBad) {
    const ordersentence= sentence.slice(0, wordNot) +"good" + sentence.slice(wordBad +3);
    console.log(ordersentence);
    } 
    else {
        console.log(ordersentence);
        }
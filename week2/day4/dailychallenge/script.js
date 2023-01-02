//DAILYCHALLENGE

/*- Prompt the user for several words (separated by commas).
  -Put the words into an array.
  -Console.log the words one per line, in a rectangular frame as seen below.
  -Check out the Hints and Requirements below.*/


answer = prompt("Enter your word list separated by commas");

let itemArray = answer.split(",");

let LengthOflongestword = 0;

let itemStar = '';

itemArray.forEach((item)=>{

    if(LengthOflongestword < item.length)
    {
        LengthOflongestword = item.length
    }
});

StartLength = LengthOflongestword + 4;
itemStar +=   "*".repeat(StartLength);
itemStar += "\n";
let separated= '';

 for(let i=0; i < itemArray.length; i++)
{
    let separatedNumber = StartLength - itemArray[i].length - 3 ;
    separated = ' '.repeat(separatedNumber)

    itemStar +=  "* " + itemArray[i] + separated + "* \n";
}

itemStar = itemStar + "*".repeat(StartLength);

 console.log(itemStar);
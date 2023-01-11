/* 


Prompt the user for a number to begin counting down bottles.
* Prompt the user for a number to begin counting down bottles.
* In the song, everytime a bottle drops,the subtracted number should go up by 1.
* The song should end with “0 bottle of beer on the wall” or “no bottle of beer on the wall”.
* For 1 bottle, you pass “it” around.
* For more than one bottle, you pass “them” around.

**/

let enterNumber = prompt("Enter a number");

if (!isNaN(enterNumber)) {

    let decrement = 0;
    let bootleNumber = 0;
    for (let i = 0; i < enterNumber; i++) {
                
        decrement++;
        if (i == 0) {
            bootleNumber = enterNumber;
            console.log(`${bootleNumber} ${bootleNumber>1 ? 'bottles' : 'bottle'} of beer on the wall`);
            console.log(`Take ${(decrement)} down, pass them around`);
        } else {
            bootleNumber = bootleNumber - i;
            console.log(`${bootleNumber} ${bootleNumber>1 ? 'bottles' : 'bottle' } of beer on the wall`);
            ((i+1)<bootleNumber) ? console.log(`Take ${(i+1)} down, pass them around`) : console.log("no bottle of beer on the wall");
        }

        // stop song
        if ((i+1)>bootleNumber) {
            break;
        }
    }
}


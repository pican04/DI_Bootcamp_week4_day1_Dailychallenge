//Exerce2
//Ask the client for their zip code and console.log “success” or “error” based on the following rules.

const codePostal = prompt("Enter a zipcode:")
    // Zip codes consists of 5 numbers
if (codePostal.length !== 5 || codePostal.indexOf(" ") !== -1 ||isNaN(codePostal)) {
    console.log("error");

}else{
    console.log("success");
}

/* Must only contain numbers
Must not contain any whitespace (spaces)
Must not be greater than 5 digits in length */

if (/^\d{5}$/.test(codePostal)) {
    console.log("error");
}else{
    console.log("error")
}
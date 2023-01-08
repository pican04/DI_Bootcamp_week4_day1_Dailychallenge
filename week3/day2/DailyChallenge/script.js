    // Get the value of each of the inputs in the HTML file when the form is submitted.
    document.getElementById("lib-button").addEventListener("click", (event) => {
    event.preventDefault();

    // get all value inputs
    let inputNounValue = document.getElementById("noun").value;
    let inputAdjectiveValue = document.getElementById("adjective").value;
    let inputPersonValue = document.getElementById("person").value;
    let inputVerbValue = document.getElementById("verb").value;
    let inputPlaceValue = document.getElementById("place").value;

    // Make sure the values are not empty
    if (inputNounValue != "" && inputAdjectiveValue != "" && inputPersonValue != "" && inputVerbValue != "" && inputPlaceValue != "") {
        console.log("yello")
    //Write a story that uses each of the values.
    let elementStory = `${inputNounValue} ${inputPersonValue} a ${inputAdjectiveValue}, ${inputVerbValue} in ${inputPlaceValue}`;
    let story = document.getElementById("story");
    story.textContent = elementStory;
    }
})
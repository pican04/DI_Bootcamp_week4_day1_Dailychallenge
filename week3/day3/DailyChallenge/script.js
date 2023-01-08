//Create an input type text that takes/shows only letters.

let textbox = document.getElementById("texte");
textbox.addEventListener("keyup", () => {
    let restriction = /^[a-zA-Z]+$/.test(textbox.value);
    if (!restriction) {
        textbox.value = textbox.value.replace(/[0-9]/g, '');
    }

    let sentence = document.querySelector("p");
    sentence.innerHTML = textbox.value;
})


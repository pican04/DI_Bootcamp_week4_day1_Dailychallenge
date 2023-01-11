let text = ["", ".", "..", "..."];
    let counter = 0;
    let element = document.getElementById("changeText");
    setInterval(change, 300);
    function change() {
     element.innerHTML = text[counter];
        counter++;
        if(counter >= text.length) { counter = 0; }
    }

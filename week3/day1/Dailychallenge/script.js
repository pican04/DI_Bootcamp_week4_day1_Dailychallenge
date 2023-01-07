
// Create an array which value is the planets of the solar system
let planets = ["Mercury", "Venus", "Earth", "Jupiter", "Saturn", "Uranus", "Neptune"];

for (let planet of planets) {
    //console.log('planet:', planet);

    //For each planet in the array, create a <div> using createElement. 
    let div = document.createElement("div");
    div.classList.add("planet");//This div should have a class named "planet".

    //Each planet should have a different background color.
    div.classList.add(planet);
    console.log('div:', div);

    //append each div to the <section> in the HTML
    let section = document.querySelector(".listPlanets");
    section.appendChild(div)

}
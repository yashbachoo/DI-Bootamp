
const planets = [
    {name:"Mercury", moons:0}, 
    {name:"Venus", moons:0}, 
    {name:"Earth", moons:1}, 
    {name:"Mars", moons:0}, 
    {name:"Jupiter", moons:2}, 
    {name:"Saturn", moons:4}, 
    {name:"Uranus", moons:0}, 
    {name:"Neptune", moons:0}
];

for (const planet of planets) {
    const div = document.createElement("div");
    div.classList.add("planet");
    div.classList.add(planet.name.toLowerCase());

    for (let i=0; i<planet.moons; i++) {
        const moonDiv = document.createElement("div");
        moonDiv.classList.add("moon");
        div.appendChild(moonDiv);
    }

    const section = document.querySelector(".listPlanets")
    section?.appendChild(div);
}


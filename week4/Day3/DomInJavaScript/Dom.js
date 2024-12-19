// getElementById
let accessDiv = document.getElementById('access');
accessDiv.style.backgroundColor="yellow";

// getElementsByClassName
let accessMe = document.getElementsByClassName("selectMe");
Array.from(accessMe).forEach(accessMe => {
    accessMe.style.backgroundColor="red";
});

////////////////////////////////////////////////////////////////////////


// For each of the questions, find 2 WAYS to access :

// 1. The div node

// 2. The ul nodes, and render all of it's children one by one

// 3. The first li of each ul


// 1. The div node

let access= document.getElementById("access");
console.log(access);

let access2= document.querySelector("#access2");
console.log(access2);

////////////////////////////////////////////////////////////////////////

// 2. The ul nodes, and render all of it's children one by one

let Ulnodes = document.querySelectorAll(".list");
Ulnodes[1].style.backgroundColor="yellow";


////////////////////////////////////////////////////////////////////////

// Accessing attributes

// Exercise 1

// Write variables to get the value of the attributes of the specified link :

// href
// hreflang
// rel
// target
// type


let accesshref= document.getElementById("di");
accesshref.setAttribute("style", "color: red");

////////////////////////////////////////////////////////////////


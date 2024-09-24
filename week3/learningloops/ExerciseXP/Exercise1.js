const people = ["Greg", "Mary", "Devon", "James"];
people.splice(0 , 1);
console.log(people);
people.splice(2, 1, "jason");
console.log(people);
people.push("yash");
console.log(people);
var index = people.indexOf("Mary");
console.log(index);
var slice = people.slice(0);
console.log(slice);
let myindex = people.indexOf("Foo");
console.log(myindex);

for ( let i of people){
    console.log(i)
}

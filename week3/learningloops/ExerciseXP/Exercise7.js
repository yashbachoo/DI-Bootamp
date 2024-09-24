const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let AlphabeticalOrder= names;
AlphabeticalOrder.sort()
console.log(AlphabeticalOrder);

let firstLetter= AlphabeticalOrder.map(AlphabeticalOrder => AlphabeticalOrder[0]);
console.log(firstLetter);
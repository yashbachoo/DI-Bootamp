let Games = ["spiderman", "fifa" , "destiny", "Watchdogs",]
let favouriteGames = Games[1];
console.log(favouriteGames);
Games[0] = "GTA";//replace an item
console.log(Games); 

length = Games.length;
console.log(length);//determines the length of the string.

Games.push("halo");//adds and item
console.log(Games);


//////////////////////////////////////////////////////////////

//splice() method
let colors = ["blue", "green", "yellow", "orange"]
let add = colors.splice(1,2, "grey", "purple")
console.log(add);
console.log(colors);

///////////////////////////////////////////////////////////////
//slice()
let mycolors =["blue","yellow","green","pink"]
let favourite = mycolors.slice(2);
console.log(favourite);
console.log(mycolors);

///////////////////////////////////////////////////////////////
//toString()
let icolors = ["blue", "yellow", "green"];
let colourString = icolors.toString();
console.log(colourString);
console.log(icolors);
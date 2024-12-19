//syntax of a function
// function functionName(){
//   statements
//}

//Example

function drinkCoffee(){
    console.log("The user drinks coffee in the morning");
}
drinkCoffee();

///////////////////////////////////////////////////////////////////////////

//functions with parameters
//parameters are used when defining a function.

//Example
function myCollegeDetails(BadgeNumber, Myclass){
    console.log("I go to imperial college "+ " ,im in "+ Myclass + " and my badge number is " + BadgeNumber);

}
myCollegeDetails(123456, "Grade 13");

///////////////////////////////////////////////////////////////////////////
// calling/ invoking a function 

// example
function calculate(){
    console.log(2+5+7);
}
calculate();

///////////////////////////////////////////////////////////////////////////
// local variables 
// a variable declared inside a function is only visible inside that function
function userMoreInfo (userName, userAge) {
    let eyeColor = "blue"; //local variable 
    console.log("My name is " + userName + ", my age is "  + userAge + ", I have " + eyeColor + " eyes");
}

userMoreInfo("Sarah", 22); //My name is Sarah, my age is 22, I have blue eyes

// undefined in the global scope
console.log(eyeColor); //Uncaught ReferenceError: eyeColor is not defined

///////////////////////////////////////////////////////////////////////////

//Global variables
//Global variables are visible from any function

let movie1="Greenmiles";

function moreMovies(myMovie, yourMovie){
    console.log("my favourite movie is " + myMovie + " ,yours is " + yourMovie + " and my brother's is " + movie1);
   
}
moreMovies("Ironman", "Spiderman");
console.log(movie1);

function movieGenre(){
    console.log(movie1 + " is a sad movie.");
}
movieGenre();


///////////////////////////////////////////////////////////////////////////

//Exercise1

function Age(MyAge){
    let answer= (40 * 1.2) % 2;
    console.log("my mom's age is 40 years old ");
    console.log("my dad's age is 50 years old");
    console.log("my age is " + answer);
}
Age();


///////////////////////////////////////////////////////////////////////////

// Return statement 
// When a function returns a value, it returns a result.
// for example-
function revision(maths, physics){
    let myresult= ("my total score in maths was " + maths + " and my total score in physics was  " + physics);
    return myresult;
}
let totalScore= revision(70, 60);
console.log(totalScore);


function groceriesList(list1, list2){
    if (list1=== "banana"){
        let result=("we need to add " + list1 + " to our list");
        return result;
    }else {
        return "we dont buy bananas on mondays";
    }
}
let mylist= groceriesList("banana");
console.log(mylist);

///////////////////////////////////////////////////////////////////////////

let userName= prompt("enter your username here: ");
let Name= prompt("enter your name here: ");

function Details(Name, userName){
    if (Name==="yash" && userName==="yashbachoo"){
        alert("congratulations you have successfully logged in!!!");
    }else {
        alert("sorry, you are not the right person");
    }


}
console.log(Details);

///////////////////////////////////////////////////////////////////////////


function calculateAge(myAge){
    return myAge *2;

}

let mymumAge = calculateAge(20);

console.log("my mom's age is: " + mymumAge);

///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////

//function definition
function welcome(){
    console.log("welcome to the session");
    console.log("how are you");
}

//main program
welcome();//function call

//////////////////////////////////////////////////////////

//objects methods
person={
    name:"raj",
    present: 2024,
    age:function(present){
        return present-this.present;
    }
}
console.log(person.age(82));

//////////////////////////////////////////////////////////

//to declare a new function, we use curly barckets
function helloWorld(){
    console.log("Hello World");
  }
  
  helloWorld();

//////////////////////////////////////////////////////////


  //anonymus function-without a name
  const helloWorld =  () =>
    console.log("Hello World");
  
  helloWorld();

//Only const and let are block-scope

//////////////////////////////////////////////////////////

function listFruits () {
    if(true) {
        const fruit1 = "orange"; //it exists in block scope
        let fruit2 = "avocado"; //it exists in block scope
        var fruit3 = "banana"; // it exists in function scope
    }

    //console.log(fruit1);
    //console.log(fruit2);
    console.log(fruit3);
}

listFruits();

//////////////////////////////////////////////////////////

//Let And Var can be reassigned,but Const cannot

var name = "Sarah";
const greeting = "Hello ";
console.log(greeting + name);

// if we try to set the greeting again, we get an error

//greeting = "Hi";
name = "Patience";
console.log(greeting + name);

let age = 1;
console.log("You're " + age);

age = 5; // we reset the age but no error
console.log("You're " + age);


//////////////////////////////////////////////////////////

name="yash bachoo";
const greetings="hello ";
console.log(greetings+name)

age= 22;{
    const age=22;
    console.log("your age is", + age, "years old");
}

//////////////////////////////////////////////////////////

first_lyrics="you are my sunshine my only sunshine, ";
const happy="you make me happy ";
console.log(first_lyrics+happy);

//////////////////////////////////////////////////////////

first_line="i am stydying for my A-level "
const exam="Cambridge examination "
const next="and i hope i can pass this exam with good grades"
console.log(first_line+exam+next)
// part 1

function infoAboutMe(){
    console.log("my name is yash, i am 22 years old and i like to play football");
}
infoAboutMe();

// part 2

function infoAboutPerson(personName, PersonAge, PersonFavouriteColor){
    console.log("your name is " + personName + " , you are " + PersonAge + " your favourite color is " + PersonFavouriteColor);

}
infoAboutPerson("yash", 22, "red");

/////////////////////////////////////////////////////////////////////////////////////

// Exercise 2

function calculateTip(){
    let bill= prompt("Enter the bill amount here: ")
    if (bill<= 50){
        console.log(bill%100*20);
    }else if(bill>=50 && bill<=200){
        console.log(bill%100*15);
    }else if(bill>=200){
        console.log(bill%100*10);
    }
}
calculateTip();
/////////////////////////////////////////////////////////////////////////////////////
//Exercise3


function isDivisible(divisor){
    let sum=0;



    for(num=0; num<=500; num++){
        if(num % divisor === 0){
            console.log(num);
            sum += num;
        }
            
        
    }
    console.log(`The sum of all the numbers divisible by ${divisor} are: ${sum}`);
}
isDivisible(45);


/////////////////////////////////////////////////////////////////////////////////////

// Exercise4

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
function myBill(){
let shoppingList=("banana", "orange", "apple");

let totalCost=0;

for(let item of shoppingList){
    if (item in stock && stock[item]>0){
        totalCost += prices[item];
        console.log(`${item}: $${prices[item]}`)

    }else {
        console.log(`${item} is out of stock.`)
    }
    console.log(`total cost: $${totalCost}`);
    return totalCost
}
}
myBill();


/////////////////////////////////////////////////////////////////////////////////////
// Exercise5
function changeEnough(itemPrice, amountOfChange){
    const quarterValue = 0.25;
    const dimeValue = 0.10;
    const nickelValue = 0.05;
    const pennyValue = 0.01;

    const totalChange =
    (amountOfChange[0] * quarterValue)+
    (amountOfChange[1] * dimeValue)+
    (amountOfChange[2] * nickelValue)+
    (amountOfChange[3] * pennyValue);
    
    return totalChange >= itemPrice;
}

console.log(changeEnough(1.50, [2, 0, 0, 25])); // true
console.log(changeEnough(1.50, [2, 0, 0, 26])); // false


/////////////////////////////////////////////////////////////////////////////////////


function hotelCost(){

    var rooms=prompt("Enter the number of nights you would like to stay in the hotel");
    if (isNaN(rooms) || rooms ==="" || rooms <=0){
        alert("you need to enter a number");
        return hotelCost();
    }

    // It converts an input to a number
    rooms= Number(rooms);

    let cost= rooms*140;

    alert("your total cost is $"+cost);
}
hotelCost();




// Exercise5(2)

function planeRideCost(){
    let destination=prompt("Enter your destination here: ");

    if (destination==="" || !isNaN(destination)){
        alert("you need to enter a destination");
        return planeRideCost();

    } 
    
    destination = destination.toLowerCase();
    
    if (destination == "london"){
        alert("your flight cost is $183");


    }else if (destination == "paris"){
        alert("your flight cost is $220");


    }else{
        alert("your flight cost is $300")
    }
}
planeRideCost();



// Exercise5(3)

function rentalCost(){
    let rent= prompt("Enter the number of days you would like to rent a car");

    if (isNaN(rent) || rent ==""){
        alert("you need to enter a number");
        return rentalCost();
    }

    cost= 40 * rent;

    alert("your total cost is $"+cost);

    discount= (cost/100)*5;
    finalCost= cost - discount;

    if (rent >= 10){
        alert("you get a discount of 5%");

    }
    alert("your final cost is $"+finalCost);

}
rentalCost();


function totalVacationCost() {
    let hotel = hotelCost();
    let plane = planeRideCost();
    let rental = rentalCost();

    let totalCost = hotel + plane + rental;
    
    alert("The cost for the hotel will be: $" + hotel);
    alert("The cost for the flight will be: $" + plane);
    alert("The cost for the rental car will be: $" + rental);
    alert("Your total vacation cost is: $" + totalCost);
}

// Call totalVacationCost to calculate and display all costs
totalVacationCost();
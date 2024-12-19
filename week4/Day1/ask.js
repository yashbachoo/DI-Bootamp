let userName= prompt("enter your username here: ");
let Name= prompt("enter your name here: ");



function Details(Name, userName,){
    if (Name==="yash" && userName==="yashbachoo"){
        // alert("congratulations you have succefully logged in!!!");
        let result=("you are verified but, We will ask you additional details")
        alert(result);
    let date= prompt("What is your date of birth? ");

    }if (date >= 18){
        alert("you can use this platform")
    }else {
        alert("sorry you are not the right person")
    }


}
Details(Name, userName);



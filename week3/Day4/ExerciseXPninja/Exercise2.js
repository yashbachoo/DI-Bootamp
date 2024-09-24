let zipCodePattern= /^\{5}$/;
let zipcode= prompt("please enter your zipcode here: ");
if (zipCodePattern.length === 5){
    alert("Success");
} else {
    alert("error");
}

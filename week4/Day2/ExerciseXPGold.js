
function isBlank(str){
    return str.trim() === '';
}

console.log(isBlank(" ")); // true
console.log(isBlank("Hello")); // false
console.log(isBlank("   ")); // true



// //////////////////////////////////////////////////////////////////

// Abbrev_name


function abbrevName(fullName) {
    let nameParts = fullName.split(" ");
    if (nameParts.length === 2) {
      return `${nameParts[0]} ${nameParts[1][0]}.`;
    } else {
      return fullName;
    }
  }
  
  console.log(abbrevName("Robin Singh")); // "Robin S."
  

  //////////////////////////////////////////////////////////////////


//   Exercise3

function swapLetters(str){
    let swapped = '';
    for( i=0; i<str.length; i++){
        let changeCharacter=str[i];
        if(changeCharacter===changeCharacter.toUpperCase()){
            swapped+=changeCharacter.toUpperCase(); 

        }else {
            swapped+=changeCharacter.toUpperCase();
        }
    }
    return swapped;
}
console.log(swapLetters("the Quick Brown Fox"))

//////////////////////////////////////////////////////////////////
// Exercise4
// To check if an array is an omnipresent value

function omnipresent(arr,value){
    for( i=0; i<arr.length; i++){
        if(!arr[i].includes(value)){
            return false;
        }
    }
    return true;
}
console.log(Omnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1));
// let language= prompt("Which language do you speak? ")

// language= language.toLowerCase();

// switch(language){
//     case 1: "English";
//     console.log("hello");
//     break;

//     case 2: "French"
//     console.log("Bonjour");
//     break;

//     case 3: "hebrew"
//     console.log("Shalom");
    
//     default:
//         console.log("01110011 01101111 01110010 01110010 0111100")
// }

// Ask the user which language they speak
let language = prompt("Which language do you speak?");

// Convert the user's answer to lowercase
language = language.toLowerCase();

// Use switch case to check the language and display the appropriate message
switch (language) {
    case 'french':
        console.log("Bonjour");
        break;
    case 'english':
        console.log("Hello");
        break;
    case 'hebrew':
        console.log("Shalom");
        break;
    default:
        console.log('01110011 01101111 01110010 01110010 01111001');
}

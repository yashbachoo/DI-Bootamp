function playTheGame () {
    function confirm () {
        var confirmMe = prompt("Are you sure you want to play the game");
        if (confirmMe ==="yes" ) {
            var confirmation =prompt("please enter a number between 0 and 10");
            console.log(confirmation);
            if (confirmation >10 || confirmation < 1){
                alert("The number you entered is invalid");
                return;
            }else {
                const computerNumber = Math.floor(Math.random() * 11);
                console.log("Computer's number: " + computerNumber);
                
            }
        } else {
            alert("No problem, Goodbye ");
            return;
        
        }

    }
    confirm();
};








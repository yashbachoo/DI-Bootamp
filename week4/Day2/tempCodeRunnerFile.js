var database = [
    {
        UserName:"yash",
        Password:"123",
        friends: ["Jane Smith", "John Doe"]
    },
    {
        UserName:"jane",
        Password:"456",
        friends: ["Yash", "John Doe"]
    },
    {
        UserName:"john",
        Password:"789",
        friends: ["Yash", "Jane Smith"]
    },
    {
        UserName:"sarah",
        Password:"012",
        friends: ["Yash", "Jane Smith"]
    }
];

var newsFeed = [
    {
        UserName: "yash",
        Text: "New article: The impact of climate change on wildlife"

    },
    {
        UserName: "jane",
        Text: "Hey, check out this video: Evolution of birds"

    },
    {
        UserName: "john",
        Text: "I've been working on a new project"
    }
];


var userNamePrompt = prompt("Whats your username? ");
var passwordPrompt = prompt("whats your password? ");


function IsUserValid(username , password){
    for (var i=0; i<database.length; i++) {
        if (database[0].UserName === username && database[0].Password === password){
            return true;
        }else {
            return false;
        }
    }
};

function Signin(user, pass) {
    if (user === database[0].UserName && pass === database[0].Password){
        var formattedNewsFeed = newsFeed.map(item => `${item.UserName}: ${item.Text}`).join('\n');
        alert(formattedNewsFeed);
    } else {
        alert("Sorry, wrong username and password");
    }

}
Signin(userNamePrompt, passwordPrompt);
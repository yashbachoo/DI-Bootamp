const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
if (users.length===0){
    console.log("no one is online");
}else if(users.length=1){
    console.log(`${users[0]} is online `);
}else if (users.length= 2){
    console.log(`${users[1]} and ${users[2]} are online`);
}else if (users.length> 2){
    console.log(`${users[1]}, ${users[2]} and ${users}-2 are online`);
}
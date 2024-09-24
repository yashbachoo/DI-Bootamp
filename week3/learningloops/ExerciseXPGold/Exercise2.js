let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }


  let identity=prompt("What is your name? ");
  if (identity in guestList){
    alert(`Hi, i'm ${identity}, and i'm from ${guestList[identity]} `);
  }else {
    alert("Hi, i'm a guest");
  }



  
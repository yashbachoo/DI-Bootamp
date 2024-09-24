var interest_rate=0.07;

function calculate_total_amount_repaid(loan_amount,number_of_years){
    total=loan_amount + (number_of_years*0.07*loan_amount);
    return total;
}

result=calculate_total_amount_repaid();

console.log(result);


citizens={
    1:{
        name:"john",
        age:45,
        married:true,

    },
    2:{
        name:"sarah",
        age:25,
        married:false,
    }
}

function register_child(name,age,married){
    id=object.keys(citizens).length+1;
    citizens[id]={
        name:name,
        age:age,
        married:married,
    }
}
register("Alice,0,false");

register("bob,0,false");



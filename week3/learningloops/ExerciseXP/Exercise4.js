const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building.numberOfFloors);


const apartmentOnFirstFloor= building.numberOfAptByFloor.firstFloor;
const apartmentOnSecondFloor=building.numberOfAptByFloor.secondFloor;

console.log(`apartmentOnFirstFloor: ${apartmentOnFirstFloor}`);
console.log(`apartmentOnSecondFloor: ${apartmentOnSecondFloor}`);


const nameOfSecondTenant= building.nameOfTenants[1];
console.log(nameOfSecondTenant);

const numberOfRoomsOfSecondTenant=building.numberOfRoomsAndRent.dan[0];
console.log(numberOfRoomsOfSecondTenant);



//check sum of sara and david

const SarahRent=building.numberOfRoomsAndRent.sarah[1];
const DavidRent=building.numberOfRoomsAndRent.david[1];
const DanRent=building.numberOfRoomsAndRent.dan[1];
const SumOfSarahAndDavidRent=(SarahRent + DavidRent);
 
if (SumOfSarahAndDavidRent > DanRent){
    console.log(DanRent+1200);
}





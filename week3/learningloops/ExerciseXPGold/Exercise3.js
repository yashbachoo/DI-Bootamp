// let age = [20,5,12,43,98,55];

// let sum=0;
// for (i=0; i<age.length; i++){
//     sum += age[i];
// }
// console.log("Sum of all ages:", sum);


// let highestAge = age[0]; 


// for (let i = 1; i < age.length; i++) {
//   if (age[i] > highestAge) {
//     highestAge = age[i];
//   }
// }

// console.log("Highest age:", highestAge);


myArr = [10,20,30,40];

let newArr = myArr.map((val, i, arr) => {
  return {
    value: val,
    index: i
  };
});


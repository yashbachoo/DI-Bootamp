
myArr = [10,20,30,40];

let newArr = myArr.map((val, i, arr) => {
  return {
    value: val,
    index: i
  };
});
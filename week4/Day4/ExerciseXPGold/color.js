let accessDocument= document.firstElementChild.childNodes[2];
console.log(accessDocument);
let accessChildNode = accessDocument.childNodes[2];
console.log(accessChildNode);
let accessTable= accessChildNode.children[0];
console.log(accessTable);
let accessTbody= accessTable.childNodes[1];
console.log(accessTbody);
let accessTrow= accessTbody.childNodes[0];
console.log(accessTrow);



////////////////////////////////////////////////////////////////


let firstTarget= accessTrow.childNodes[1];
firstTarget.style.backgroundColor="red";
console.log(firstTarget);


////////////////////////////////////////////////////////////////

let AccessSecondRow= accessTbody.childNodes[2];
let SecondTarget= AccessSecondRow.childNodes[3];
SecondTarget.style.backgroundColor="red";
console.log(SecondTarget);

////////////////////////////////////////////////////////////////
let AccessThirdRow = accessTbody.childNodes[4];
let ThirdTarget = AccessThirdRow.childNodes[5];
ThirdTarget.style.backgroundColor="red";
console.log(ThirdTarget);


////////////////////////////////////////////////////////////////

let AccessFourthRow = accessTbody.childNodes[6];
let FourthTarget = AccessFourthRow.childNodes[7];
FourthTarget.style.backgroundColor="red";
console.log(FourthTarget);


////////////////////////////////////////////////////////////////

let AccessFifthRow = accessTbody.childNodes[8];
let FifthTarget = AccessFifthRow.childNodes[9];
FifthTarget.style.backgroundColor="red";
console.log(FifthTarget);
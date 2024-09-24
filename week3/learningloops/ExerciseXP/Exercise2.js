// Array of favorite colors
const colors = ['blue', 'red', 'green', 'purple', 'orange'];

for (let i = 0; i < colors.length; i++) {
    let suffix;
    if (i === 0) {
        suffix = 'st';
    } else if (i === 1) {
        suffix = 'nd';
    } else if (i === 2) {
        suffix = 'rd';
    } else {
        suffix = 'th'; 
    }


    console.log(`My ${i + 1}${suffix} choice is ${colors[i]}`);
}

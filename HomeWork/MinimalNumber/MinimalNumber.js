const numbers =  [0, 1, 2]; 
let min =  numbers[0];
for (const num of numbers) {
  
  if (num < min) { 
    min = num;
  }
}
console.log(min);


const arr = [0, 1, 2];
const increasNumbers1 = numbers => numbers = numbers.map(item => item + 1);
console.log(increasNumbers1(arr));

const numbers1 = [10, 15, 23];
let min1 = numbers1[0];

for (let i = 1; i < numbers1.length; i += 1) {
  if (numbers1[i] < min1) {
    min1 = numbers1[i];
  }
}
console.log(min1);

const arr1 = [10, 15, 23];
const increasNumbers = numbers => numbers = numbers.map (item => item +1);

console.log(increasNumbers(arr1));
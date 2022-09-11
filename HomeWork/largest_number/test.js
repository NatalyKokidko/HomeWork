import { TheLargestNumber } from './index.js';

const result = TheLargestNumber(4, '4.5', '5.6');
const areEqual1 = result === "The 3rd number is largest and equal: 5.6";
console.log(areEqual1);

const result2 = TheLargestNumber(7.7, '7.7', '7.6');
const areEqual2 = result2 === "The 1st and 2nd numbers are largest and equal: 7.7";
console.log(areEqual2);

const result3 = TheLargestNumber(9.8, '9.5', '9.8');
const areEqual3 = result3 === "The 1st and 3rd numbers are largest and equal: 9.8";
console.log(areEqual3);

const result5 = TheLargestNumber(4.8, '4.8', '5.5');
const areEqual5 = result5 === "The 3rd numbers are largest and equal: 5.5";
console.log(areEqual5);

const result4 = TheLargestNumber(5.5, '5.5', '5.5');
const areEqual4 = result4 === "All three numbers are equal. And equal: 5.5";
console.log(areEqual4);



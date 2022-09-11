const numbers = [0, 1, 5, 8, 12, 25, 38, 52, 85];
const minimalNumber = 10;

function filterByMinimalNumber(value) {
  return value > minimalNumber;
}

const filteredArray = numbers.filter(filterByMinimalNumber);
console.log(filteredArray);                  
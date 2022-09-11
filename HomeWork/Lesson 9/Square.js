var square = document.getElementById("squareId");
console.dir(square);

var color = prompt('Which color square do you want?');

console.log(color);

square.style.background = color;

var border = document.getElementById("borderId");
console.dir(border);

var color = prompt('Which color border do you want?');

console.log(color);

square.style.borderColor = color; 

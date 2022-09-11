// Tasks:
// 1. Add new array with drinks
// 2. Make drinks show up in the list
// 3.Replace repeating loops with a function. Function should: 
//   1. Accept any array
//   2. Iterate through array
//   3. On each iteration create a <li> and put element of array      inside as text
//   4. Attach <li> to the list


// Declaring arrays
const fruits = ['Apples', 'Tangerines', 'Grapes', 'Pears', 'Cherry'];
const dairy = ['Cheese', 'Milk', 'Yoghurt'];
const vegetables = ['Tomatoes', 'Cucumbers', 'Carrots', 'Cabbage'];
const drinks = ['Juce', 'Water', 'Martini', 'Wine'];

// Declaring function which accepts text and outputs <li> html element
function createListItem(text) {
  // Creating <li> element
  const listItem = document.createElement('li');
  // Creating text node
  const textNode = document.createTextNode(text);
  // Putting text node inside of <li> HTML element
  listItem.appendChild(textNode);
  // Returning listItem
  return listItem;
}

// Getting <ul> element from HTML to which we will attach list elements later
const list = document.getElementById('shopping-list');

// Iterate through fruits array and attach created <li> to list
for(let i = 0; i < fruits.length; i++) {
  // Create <li> html element with fruit name in it
  const fruit = createListItem(fruits[i]);
  // Put <li> inside of <ul> list element
  list.appendChild(fruit);
}

for(let i = 0; i < dairy.length; i++) {
  const dairyItem = createListItem(dairy[i]);
  list.appendChild(dairyItem);
}

for(let i = 0; i < vegetables.length; i++) {
  const veggie = createListItem(vegetables[i]);
  list.appendChild(veggie);
}

for(let i = 0; i < drinks.length; i++) {
  const drink = createListItem(drinks[i]);
  list.appendChild(drink);
}

function createList (arr) {
  for(let i=0; i < arr.length; i++) {
    const groceries = createListItem(arr[i]);
    list.appendChild(groceries);
  }
}

const allGroceries = fruits.concat(dairy, vegetables, drinks);
//console.log(allGroceries);
getCreateList(allGroceries);

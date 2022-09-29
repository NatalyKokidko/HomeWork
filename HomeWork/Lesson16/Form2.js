fetch('https://catfact.ninja/breeds?limit=10',{
      method: 'GET',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'text/plain;charset=UTF-8'
      },
    })
      .then(response => response.json())
      .then(response => {
        console.log('response', response);
  for (item of response.data) 
    {
    let listItem = createListItem(item.breed);
    list.appendChild(listItem);
  }     
      })
       .then(response => {
  function createForm() { document.getElementById("CatForm");
}
createForm();
});
function createListItem(text) {
  const listItem = document.createElement('option');
  const textNode = document.createTextNode(text);
  listItem.appendChild(textNode);
  return listItem; 
}

const list = document.getElementById('pet-select');
    
    
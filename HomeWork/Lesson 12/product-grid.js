const products = [
    { 
      imageSrc: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjA2ODIwNTI&ixlib=rb-1.2.1&q=80', 
      name: 'T-Shirt: ',
      price: '20 euro',
      
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjA2ODI1Njk&ixlib=rb-1.2.1&q=80', 
      name: 'Jeans: ',
      price: '35 euro',
      
    },
      
      { 
      imageSrc: 'https://palto-as.ru/image/cache/catalog/compressed1/KAILANI-370x560-370x560.jpg', 
      name: 'Coat: ',
      price: '60 euro',
      
    },
      
      { 
      imageSrc: 'https://imgcdn.loverepublic.ru/upload/images/03572/0357234520_1.jpg', 
      name: 'Dress: ',
      price: '55 euro',
      
    },
      
      { 
      imageSrc: 'https://fashion-ua.com.ua/products/pidjaki/76/1.jpg', 
      name: 'Blaser: ',
      price: '50 euro',
       
    },
      
    {
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEib122IrfY9YEoY4ozjdA5H9QA48Wo2GdVw&usqp=CAU',
      name: 'Shoes: ',
      price: '120 euro',
      }
    ];
    // Getting <div> element from HTML to which we will attach grid elements later
    const grid = document.getElementById('ecom-products');
    
    
    function createImage(src) {
      if(!src) throw new Error('Please, provide image src');
      const image = document.createElement('img');
      image.setAttribute('src', src);
      return image;
    }
    
    function createGridItem(product) {
      if (!product) throw new Error('Please, provide product');
      const gridItem = document.createElement('div');
      const image = createImage(product.imageSrc);
      const textNode = document.createTextNode(product.name || '');
      const textNode1 = document.createTextNode(product.price || '');
      gridItem.appendChild(image);
      gridItem.appendChild(textNode);
      gridItem.appendChild(textNode1);
      return gridItem;
    }
    
    for(let i = 0; i < products.length; i++) {
      const product = createGridItem(products[i]);
      grid.appendChild(product);
    }
    
    
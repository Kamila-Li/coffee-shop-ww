let search = document.querySelector('.search-box');
  function hideProductCard() {
    document.getElementById("productCard").style.display = "none";
  }

  const cards = [
      {
          img: 'img/cloudhotchokolate.jpg',
          title: 'Cloud Chokolate',
          cost: '26zl',
          button: {
              title: 'Add to cart',
          },
          content: 'mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus'
      },
      {
          img: 'img/moon hot chocolatte.jpg',
          title: 'Moon Chokolate',
          cost: '19zl',
          button: {
              title: 'Add to cart',
          },
          content: 'mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus'
      },
      {
          img: 'img/mooncapucino.jpg',
          title: 'Moon Capucino',
          cost: '45zl',
          button: {
              title: 'Add to cart',
          },
          content: 'mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus'
      },
      {
          img: 'img/cloudhotchokolate.jpg',
          title: 'Cloud Chokolate',
          cost: '26zl',
          content: 'mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus',
          button: {
              title: 'Add to cart',
          }
      },
      {
          img: 'img/moon hot chocolatte.jpg',
          title: 'Moon Chokolate',
          cost: '19zl',
          button: {
              title: 'Add to cart',
          },
          content: 'mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus'
      },
      {
          img: 'img/mooncapucino.jpg',
          title: 'Moon Capucino',
          cost: '45zl',
          button: {
              title: 'Add to cart',
          },
          content: 'mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus'
      }
  ];
    let cartArr = [
        {

        }
    ]
console.log(cartArr);

const cardContainer = document.getElementById('products_container');

cards.forEach((card, index) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('box');
    let cartBtnIndex = index;

    const imgLink = document.createElement('a');
    const imageElement = document.createElement('img');
    imageElement.src = card.img;
    imgLink.href = './details/details.html'
    cardElement.appendChild(imgLink);
    imgLink.appendChild(imageElement);

    const titleElement = document.createElement('h3');
    titleElement.textContent = card.title;
    cardElement.appendChild(titleElement);

    const contentElement = document.createElement('p');
    contentElement.textContent = card.content;
    cardElement.appendChild(contentElement);

    const managementElement = document.createElement('div');
    const addBtn = document.createElement('button');
    addBtn.addEventListener('click', () => {
        addToCart(cartBtnIndex);
    });
    const cost = document.createElement('span');
    managementElement.className = 'content'
    cost.textContent = card.cost
    addBtn.textContent = card.button.title;
    addBtn.id = `add-${index}`;
    cardElement.appendChild(managementElement);
    managementElement.appendChild(cost);
    managementElement.appendChild(addBtn);

    cardContainer.appendChild(cardElement);
});

document.querySelector('#search-icon').onclick = () =>{
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar-box');

document.querySelector('#menu-icon').onclick = () =>{
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}


let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow, window,scrollY > 0');
});

const cartMenu = document.getElementById("cart_header_menu")
document.querySelector("#open_cart_menu").addEventListener("click",() => {
    cartMenu.style.display = 'block';
    showCart()
});

document.querySelector(".wrapper").addEventListener("click", () => {
    cartMenu.style.display = 'none';
});
function addToCart(index) {
    const cartCount = document.getElementById('cart-count');
    const itemCount = parseInt(cartCount.textContent) || 0;
    cartCount.textContent = itemCount + 1;

    const product = cards[index];
    const cartProduct = {
        title: product.title,
        cost: product.cost,
    };
    cartArr.push(cartProduct);
    localStorage.setItem('cart', JSON.stringify(cartArr));

    console.log(`Товар "${product.title}" стоимостью ${product.cost} добавлен в корзину.`);
}
function showCart() {
    const cartContent = document.getElementById("cart_content");
    cartContent.innerHTML = '';

    if (cartArr.length === 0) {
        const message = document.createElement('p');
        message.textContent = 'Корзина пуста';
        cartContent.appendChild(message);
    } else {
        let totalPrice = 0;

        cartArr.forEach((product) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('product-item');

            const titleElement = document.createElement('h5');
            titleElement.textContent = product.title;
            cartItem.appendChild(titleElement);

            const costElement = document.createElement('p');
            costElement.textContent = product.cost;
            cartItem.appendChild(costElement);

            totalPrice += parseFloat(product.cost) || 0;

            cartContent.appendChild(cartItem);
        });

        const totalElement = document.createElement('h4');
        totalElement.style.position = 'absolute'
        totalElement.style.left = '43px'
        totalElement.style.bottom = '5px'
        totalElement.textContent = `Итого: ${totalPrice.toFixed(2)} zł`;
        cartContent.appendChild(totalElement);
    }
}

const storedCart = localStorage.getItem('cart');
if (storedCart) {
    cartArr = JSON.parse(storedCart);
}
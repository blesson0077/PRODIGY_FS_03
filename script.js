const products = [
  { id: 1, name: "T-shirt", price: 10, image: "https://via.placeholder.com/150", description: "Comfortable cotton T-shirt" },
  { id: 2, name: "Mug", price: 5, image: "https://via.placeholder.com/150", description: "Ceramic coffee mug" },
  { id: 3, name: "Notebook", price: 3, image: "https://via.placeholder.com/150", description: "A5 size notebook" }
];

const productList = document.getElementById('products');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cart = [];

function displayProducts() {
  products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>Price: $${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
  });
  cartTotal.textContent = `Total: $${total}`;
}

displayProducts();

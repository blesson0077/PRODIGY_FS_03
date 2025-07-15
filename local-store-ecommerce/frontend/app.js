fetch('/api/products')
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById('product-list');
    products.forEach(p => {
      const div = document.createElement('div');
      div.innerHTML = `<h3>${p.name}</h3><p>${p.description}</p><strong>$${p.price}</strong>`;
      container.appendChild(div);
    });
  });

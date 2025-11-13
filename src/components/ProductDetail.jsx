import React, { useEffect, useState } from 'react';
import'./Products.css';

function Product({addToCart}) {
  const [products, setProducts] = useState([]);
  products.map((product) => (
  <div key={product.id} className="product-card">
    <img src={product.image} alt={product.title} />
    <h4>{product.title}</h4>
    <p>₹{product.price}</p>
    <button onClick={() => addToCart(product)}>Add to Cart</button>
  </div>
))


  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=8')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  return (
    <section className="products" id="products">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </section>
  );
}

export default Product;

import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function ProductList() {
    const { addToCart } = useContext(CartContext);
    const products = [
        { id:1 , name:'product 1', price: 10.99},
        { id:2 , name:'product 2', price: 12.99},
        { id:3 , name:'product 3', price: 14.99},
        { id:4 , name:'product 4', price: 18.99},
    ];

    const handleAddtoCart = (product) => {
        
        addToCart(product)
    }
  return (
    <div>
      <h2>Products</h2>
      <ul>
      {products.map(product => (
        <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={()=> handleAddtoCart(product)}>Add to Cart</button>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default ProductList

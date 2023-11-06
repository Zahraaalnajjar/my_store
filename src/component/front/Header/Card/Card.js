import React from 'react';
import "./Card.css";

function Cart({ cartItems, handleAddProduct, handleRemoveProduct, handleCartCleaner }) {
  const totalPrice = cartItems ? cartItems.reduce((total, item) => total + item.quantity * item.price, 0) : 0;

  return (
    <div className='cart-items'>
      <h2 className='cart-items-header'>Cart Items</h2>
      <div className='clear-cart'>
        {cartItems && cartItems.length >= 1 && (
          <button className='clear-cart-button' onClick={handleCartCleaner}>Clear Cart</button>
        )}
      </div>
      {cartItems && cartItems.length === 0 ? (
        <div className='cart-items-empty'>No items are added</div>
      ) : (
        <div>
          {cartItems &&
            cartItems.map((item) => (
              <div key={item.id} className='cart-items-list'>
                <img className='cart-items-image' src={item.image} alt={item.name} />
                <div className='cart-items-name'>{item.name}</div>
                <div className='cart-items-function'>
                  <button className='cart-items-add' onClick={() => handleAddProduct(item)}>+</button>
                  <button className='cart-items-remove' onClick={() => handleRemoveProduct(item)}>-</button>
                </div>
                <div className='cart-items-price'>{item.quantity} * ${item.price}</div>
              </div>
            ))}
        </div>
      )}
      <div className='cart-items-total-price-name'>Total price</div>
      <div className='cart-items-total-price'>${totalPrice}</div>
    </div>
  );
}

export default Cart;
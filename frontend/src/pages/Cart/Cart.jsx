import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from './../../context/StoreContext'
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className='cart'>

      <div className="cart-items">
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className='cart-items-title cart-items-item' key={item._id}>
                <img src={item.image} alt='' />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${cartItems[item._id] * item.price}</p>
                <p className='cross' onClick={() => removeFromCart(item._id)}>x</p>
              </div>
            )
          }
        }
        )}
      </div>

      <div className='cart-bottom'>
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className='cart-total-detials'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cart-total-detials'>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 5}</p>
            </div>
            <hr />
            <div className='cart-total-detials'>
              <h3>Total</h3>
              <p>${getTotalCartAmount() === 0 ? 0: getTotalCartAmount() + 5}</p>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>Proceed to checkout</button>
        </div>

        <div className="cart-promocode">
          <div>
            <p>if you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type='text' placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Cart
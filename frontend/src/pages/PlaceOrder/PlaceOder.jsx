import React, { useContext } from 'react'
import './PlaceOder.css'
import { StoreContext } from '../../context/StoreContext';

const PlaceOder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className='place-order'>

      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
          <div className='multi-fields'>
            <input type='text' placeholder='First name' />
            <input type='text' placeholder='Last name' />
          </div>
            <input type='text' placeholder='Email address' />
            <input type='text' placeholder='Street' />
          <div className='multi-fields'>
            <input type='text' placeholder='City' />
            <input type='text' placeholder='State' />
          </div>
          <div className='multi-fields'>
            <input type='text' placeholder='Zip code' />
            <input type='text' placeholder='Country' />
          </div>
            <input type='text' placeholder='Phone' />
      </div>

    <div className="place-order-right">
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
          <button>Proceed to payment</button>
      </div>
    </div>

      
      
    </form>
  )
}

export default PlaceOder
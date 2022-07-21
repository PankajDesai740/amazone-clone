import React from 'react'
import { useStateValue } from './StateProvider';
import ad from './img/ad.jpg';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';


function Checkout() {
    const [{basket}] = useStateValue();
  return (
    <div className='checkout'>
        <img className='checkout__img' src={ad} alt=" Advertise" />

        {basket?.length === 0 ?(
            <div>
                <h2>Your Basket is Empty</h2>
                <p>
                    You have no Items in your Basket. 
                    To buy one or more item, Click "ADD To Basket"
                    next to the Item.
                </p>
            </div>
        ): (
            <div>
                <h2 className='checkout__title'>Your Shopping Basket</h2>

                {/* {List Out all the checkout products } */}
                {basket.map (item =>(
                    <CheckoutProduct
                    item={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
                

            </div>
        )}
    </div>
  )
}

export default Checkout
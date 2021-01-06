import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PayPalButton } from "react-paypal-button-v2";
import { useHistory } from 'react-router-dom'
import { clearCart } from '../Actions/photos'
import { removeFromCart } from '../Actions/photos'


export const Cart = () => {
    const [ paypalButton, setPaypalButton ] = useState(false)
    const cart = useSelector(state => state.cart, prev => prev.length === cart)
    const dispatch = useDispatch()
    const history = useHistory()
    const total = cart.map(photo => parseInt(photo.price)).reduce((a, b) => a + b, 0)

    const renderCart = () => {
        return cart.map((photo, i) => {
        return <div className='cart-item'>{photo.title}: ${photo.price}.00
        <button onClick={() => dispatch(removeFromCart(i))} style={{float: 'right'}} className="circular mini ui icon button black">
        <i className="x icon"></i>
        </button></div>
        })
    }

    return(
        <>
            { !paypalButton ? 
            <>
            <div style={{ fontSize: '20px'}} className='login-form'>Please Read the About page before you checkout</div>
            <div className='cart-cont'>
                <div className='your-cart'>Your cart</div>
                    { cart.length !== 0 ? <div className='cart'>{renderCart()}</div> : null }
                <div className='total'>Total: ${total}.00</div>
                <a href='buymeacoff.ee/AnansiOmega'><button style={{ marginLeft: '5px', width: '497px', color: 'black' }} className='massive ui button'>Make a Donation</button></a>
            </div>
            </>
            :
            <>
                {/* <div className='total-paypal'>Total: ${total}.00</div> */}

                {/* <PayPalButton
                amount={total}
                shippingPreference= "NO_SHIPPING"
                options={{
                    clientId: "ASenCKzw7AEnV5LN5wv2E8TLaZdIpCKZIZYePB0et7L1JA-zippvq-5HFKgUi-BKXCaXtPd24I34I_SM"
                }}
                onSuccess={(details, data) => { 
                alert("Thanks for donating " + details.payer.name.given_name)
                dispatch(clearCart())
                history.push('/')
                }}
                /> */}
            </>
            }
        </>
    )
}
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { PayPalButton } from "react-paypal-button-v2";
import { useHistory } from 'react-router-dom'
import { clearCart } from '../Actions/photos'


const Cart = ({cart, clearCart}) => {
    const [ paypalButton, setPaypalButton ] = useState(false)
    const history = useHistory()
    const total = cart.map(photo => parseInt(photo.price)).reduce((a, b) => a + b, 0)

    const renderCart = () => {
        return cart.map(photo => <div className='cart-item'>{photo.title}: ${photo.price}.00</div>)
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
                <button style={{ marginLeft: '5px', width: '497px', color: 'black' }} className='massive ui button' onClick={() => setPaypalButton(true)}>Make a Donation</button>
            </div>
            </>
            :
            <>
                <div className='total-paypal'>Total: ${total}.00</div>
                <PayPalButton
                amount={total}
                shippingPreference= "NO_SHIPPING"
                onSuccess={(details, data) => { 
                alert("Thanks for purchasing " + details.payer.name.given_name)
                clearCart()
                history.push('/')
                }}
                />
            </>
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    clearCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
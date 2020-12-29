import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../Actions/auth'

const NavBar = ({cart, auth, logoutUser}) => {
    return(
        <div style={{ backgroundColor: 'lightgrey'}} className="ui menu">
            <Link to='/'>
            <div className="header item">
                Igg's Photo Shop
            </div>
            </Link>
            <Link to='/about' className='item'>
                About Us
            </Link>
            <Link className="item" to='/cart'>
                <>Cart</><div className="ui circular label black">{cart.length}</div>
            </Link>
            { auth.id ? 
            <a onClick={() => logoutUser()} className="right menu item">Logout</a>
            : 
            <Link className="right menu item" to='/login' style={{color: 'black'}}>Login</Link>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
        auth: state.auth
    }
}

const mapDispatchToProps = {
    logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../Actions/auth'

export const NavBar = () => {
    const cart = useSelector(state => state.cart, prev => prev.length === cart)
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const handleLogout = () => {
        localStorage.removeItem('myToken')
        dispatch(logoutUser())
    }
    
    return(
        <div className="ui menu inverted">
            <Link to='/'>
            <div className="header item">
                Igg's Photo Shop
            </div>
            </Link>
            <Link to='/about' className='item'>
                About
            </Link>
            <Link className="item" to='/cart'>
                <>Cart</><div className="ui circular label white">{cart.length}</div>
            </Link>
            { auth.id ? 
            <a onClick={handleLogout} className="right menu item">Logout</a>
            : 
            <Link className="right menu item" to='/login'>Login</Link>
            }
        </div>
    )
}
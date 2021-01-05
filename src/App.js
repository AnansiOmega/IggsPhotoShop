import React, { useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Login } from './pages/login'
import { Cart } from './pages/cart'
import { About } from './pages/about'
import { NavBar } from './components/navbar'
import image from './images/blackWoodBackground.jpg'
import { currentUser } from './Actions/auth'
import { useDispatch } from 'react-redux'
import { fetchPhotosSuccess } from './Actions/photos'

export const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    document.body.style.backgroundImage = `url(${image})`
  },[])

  useEffect(() => {
    const token = localStorage.getItem('myToken')
    const reqObj = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    fetch('http://localhost:3000/current_user', reqObj)
    .then(resp => resp.json())
    .then(user => dispatch(currentUser(user)))
  },[])

  useEffect(() => {
  fetch('http://localhost:3000/photos')
  .then(resp => resp.json())
  .then(photos => dispatch(fetchPhotosSuccess(photos)))
  },[])



  return (
    <div className="App">
      <NavBar />
       <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/cart' component={Cart} />
          <Route path='/about' component={About} />
        </Switch>
    </div>
  );
}